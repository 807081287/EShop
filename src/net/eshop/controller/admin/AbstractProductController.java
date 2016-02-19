/**
 *
 */
package net.eshop.controller.admin;

import java.math.BigDecimal;

import net.eshop.Setting;
import net.eshop.util.SettingUtils;


/**
 * @author joeli2
 *
 */
public class AbstractProductController extends BaseController
{
	/**
	 * 计算默认市场价
	 *
	 * @param price
	 *           价格
	 */
	protected BigDecimal calculateDefaultMarketPrice(final BigDecimal price)
	{
		final Setting setting = SettingUtils.get();
		final Double defaultMarketPriceScale = setting.getDefaultMarketPriceScale();
		return setting.setScale(price.multiply(new BigDecimal(defaultMarketPriceScale.toString())));
	}

	/**
	 * 计算默认积分
	 *
	 * @param price
	 *           价格
	 */
	protected long calculateDefaultPoint(final BigDecimal price)
	{
		final Setting setting = SettingUtils.get();
		final Double defaultPointScale = setting.getDefaultPointScale();
		return price.multiply(new BigDecimal(defaultPointScale.toString())).longValue();
	}
}
