/*
 *
 *
 *
 */
package net.eshop.plugin.alipayDirect;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;

import net.eshop.Setting;
import net.eshop.entity.Payment;
import net.eshop.entity.PluginConfig;
import net.eshop.plugin.PaymentPlugin;
import net.eshop.util.SettingUtils;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;


/**
 * Plugin - 支付宝(即时交易)
 *
 *
 *
 */
@Component("alipayDirectPlugin")
public class AlipayDirectPlugin extends PaymentPlugin
{

	@Override
	public String getName()
	{
		return "支付宝(即时交易)";
	}

	@Override
	public String getVersion()
	{
		return "1.0";
	}

	@Override
	public String getAuthor()
	{
		return SettingUtils.get().getSiteName();
	}

	@Override
	public String getSiteUrl()
	{
		return SettingUtils.get().getSiteUrl();
	}

	@Override
	public String getInstallUrl()
	{
		return "alipay_direct/install.jhtml";
	}

	@Override
	public String getUninstallUrl()
	{
		return "alipay_direct/uninstall.jhtml";
	}

	@Override
	public String getSettingUrl()
	{
		return "alipay_direct/setting.jhtml";
	}

	@Override
	public String getRequestUrl()
	{
		//		return "https://mapi.alipay.com/gateway.do";

		/**
		 * 模拟alipay即时到账的支付
		 */
		return "/EShop/onlinepaysimulator/alipay/step1.jsp";
	}

	@Override
	public RequestMethod getRequestMethod()
	{
		return RequestMethod.get;
	}

	@Override
	public String getRequestCharset()
	{
		return "UTF-8";
	}

	@Override
	public Map<String, Object> getParameterMap(final String sn, final String description, final HttpServletRequest request)
	{
		final Setting setting = SettingUtils.get();
		final PluginConfig pluginConfig = getPluginConfig();
		final Payment payment = getPayment(sn);
		final Map<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("service", "create_direct_pay_by_user");
		parameterMap.put("partner", pluginConfig.getAttribute("partner"));
		parameterMap.put("_input_charset", "utf-8");
		parameterMap.put("sign_type", "MD5");
		parameterMap.put("return_url", getNotifyUrl(sn, NotifyMethod.sync));
		parameterMap.put("notify_url", getNotifyUrl(sn, NotifyMethod.async));
		parameterMap.put("out_trade_no", sn);
		parameterMap.put("subject", StringUtils.abbreviate(description.replaceAll("[^0-9a-zA-Z\\u4e00-\\u9fa5 ]", ""), 60));
		parameterMap.put("body", StringUtils.abbreviate(description.replaceAll("[^0-9a-zA-Z\\u4e00-\\u9fa5 ]", ""), 600));
		parameterMap.put("payment_type", "1");
		parameterMap.put("seller_id", pluginConfig.getAttribute("partner"));
		parameterMap.put("total_fee", payment.getAmount().setScale(2).toString());
		parameterMap.put("show_url", setting.getSiteUrl());
		parameterMap.put("paymethod", "directPay");
		parameterMap.put("exter_invoke_ip", request.getLocalAddr());
		parameterMap.put("extra_common_param", "eshop");
		parameterMap.put("sign", generateSign(parameterMap));
		return parameterMap;
	}

	@SuppressWarnings("unchecked")
	@Override
	public boolean verifyNotify(final String sn, final NotifyMethod notifyMethod, final HttpServletRequest request)
	{
		final PluginConfig pluginConfig = getPluginConfig();
		final Payment payment = getPayment(sn);
		if (generateSign(request.getParameterMap()).equals(request.getParameter("sign"))
				&& pluginConfig.getAttribute("partner").equals(request.getParameter("seller_id"))
				&& sn.equals(request.getParameter("out_trade_no"))
				&& ("TRADE_SUCCESS".equals(request.getParameter("trade_status")) || "TRADE_FINISHED".equals(request
						.getParameter("trade_status")))
				&& payment.getAmount().compareTo(new BigDecimal(request.getParameter("total_fee"))) == 0)
		{
			final Map<String, Object> parameterMap = new HashMap<String, Object>();
			parameterMap.put("service", "notify_verify");
			parameterMap.put("partner", pluginConfig.getAttribute("partner"));
			parameterMap.put("notify_id", request.getParameter("notify_id"));
			if ("true".equals(post("https://mapi.alipay.com/gateway.do", parameterMap)))
			{
				return true;
			}
		}
		return false;
	}

	@Override
	public String getNotifyMessage(final String sn, final NotifyMethod notifyMethod, final HttpServletRequest request)
	{
		if (notifyMethod == NotifyMethod.async)
		{
			return "success";
		}
		return null;
	}

	@Override
	public Integer getTimeout()
	{
		return 21600;
	}

	/**
	 * 生成签名
	 *
	 * @param parameterMap
	 *           参数
	 * @return 签名
	 */
	private String generateSign(final Map<String, ?> parameterMap)
	{
		final PluginConfig pluginConfig = getPluginConfig();
		return DigestUtils.md5Hex(joinKeyValue(new TreeMap<String, Object>(parameterMap), null, pluginConfig.getAttribute("key"),
				"&", true, "sign_type", "sign"));
	}

}