/*
 *
 *
 *
 */
package net.eshop.controller.shop;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import net.eshop.entity.Payment;
import net.eshop.plugin.PaymentPlugin;
import net.eshop.plugin.PaymentPlugin.NotifyMethod;
import net.eshop.service.MemberService;
import net.eshop.service.OrderService;
import net.eshop.service.PaymentService;
import net.eshop.service.PluginService;
import net.eshop.service.SnService;

import org.apache.commons.beanutils.ConvertUtils;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


/**
 * Controller - 支付
 *
 *
 *
 */
@Controller("simulateUnionPaymentController")
@RequestMapping("/s-unionpay")
public class SimulateUnionPaymentController extends BaseController
{

	@Resource(name = "orderServiceImpl")
	private OrderService orderService;
	@Resource(name = "memberServiceImpl")
	private MemberService memberService;
	@Resource(name = "pluginServiceImpl")
	private PluginService pluginService;
	@Resource(name = "paymentServiceImpl")
	private PaymentService paymentService;
	@Resource(name = "snServiceImpl")
	private SnService snService;

	@RequestMapping("/notify/{notifyMethod}/{sn}")
	public String notify(@PathVariable final NotifyMethod notifyMethod, @PathVariable final String sn,
			final HttpServletRequest request, final ModelMap model)
	{
		final Payment payment = paymentService.findBySn(sn);
		if (payment != null)
		{
			final PaymentPlugin paymentPlugin = pluginService.getPaymentPlugin(payment.getPaymentPluginId());
			if (paymentPlugin != null)
			{
				paymentService.handle(payment);
				model.addAttribute("notifyMessage", paymentPlugin.getNotifyMessage(sn, notifyMethod, request));
			}
			model.addAttribute("payment", payment);
		}
		return "shop/payment/notify";
	}

	/**
	 * 通知
	 */
	@RequestMapping("/notify/unionpay/{notifyMethod}/{sn}/{orderAmount}")
	public String notify(@PathVariable final NotifyMethod notifyMethod, @PathVariable final String sn,
			@PathVariable final String orderAmount, final HttpServletRequest request, final ModelMap model,
			final RedirectAttributes redirectAttributes)
	{
		final String signature = generateSign(request.getParameterMap());

		final String url = "/s-unionpay/notify/general/" + sn + ".jhtml?signature=" + signature
				+ "&merId=eshop&orderCurrency=156&respCode=00&orderAmount=" + orderAmount + "&orderNumber=" + sn;
		return "redirect:" + url;
	}

	private String generateSign(final Map<String, ?> parameterMap)
	{
		final String key = "unionpay";
		return DigestUtils.md5Hex(joinKeyValue(new TreeMap<String, Object>(parameterMap), null, "&key=" + DigestUtils.md5Hex(key),
				"&", true, "signMethod", "signature"));
	}

	protected String joinKeyValue(final Map<String, Object> map, final String prefix, final String suffix, final String separator,
			final boolean ignoreEmptyValue, final String... ignoreKeys)
	{
		final List<String> list = new ArrayList<String>();
		if (map != null)
		{
			for (final Entry<String, Object> entry : map.entrySet())
			{
				final String key = entry.getKey();
				final String value = ConvertUtils.convert(entry.getValue());
				if (StringUtils.isNotEmpty(key) && !ArrayUtils.contains(ignoreKeys, key)
						&& (!ignoreEmptyValue || StringUtils.isNotEmpty(value)))
				{
					list.add(key + "=" + (value != null ? value : ""));
				}
			}
		}
		return (prefix != null ? prefix : "") + StringUtils.join(list, separator) + (suffix != null ? suffix : "");
	}
}