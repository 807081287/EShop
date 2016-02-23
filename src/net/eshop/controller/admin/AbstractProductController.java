/**
 *
 */
package net.eshop.controller.admin;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import net.eshop.Setting;
import net.eshop.entity.Goods;
import net.eshop.entity.Product;
import net.eshop.entity.Specification;
import net.eshop.entity.SpecificationValue;
import net.eshop.form.ProductForm;
import net.eshop.form.Variant;
import net.eshop.service.SpecificationService;
import net.eshop.service.SpecificationValueService;
import net.eshop.util.SettingUtils;

import org.apache.commons.lang.ArrayUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.util.Assert;


/**
 * @author joeli2
 *
 */
public class AbstractProductController extends BaseController
{
	private static Logger LOG = Logger.getLogger(AbstractProductController.class);
	@Resource(name = "specificationServiceImpl")
	private SpecificationService specificationService;

	@Resource(name = "specificationValueServiceImpl")
	private SpecificationValueService specificationValueService;

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

	protected ProductForm createProductForm(final String[] specificationCodes, final HttpServletRequest request,
			final Product baseProduct)
	{
		Assert.notEmpty(specificationCodes, "specificationCodes cannot be empty!");
		Assert.notEmpty(request.getParameterValues("specification_" + specificationCodes[0]), "There is no variants. (没有规格商品)");


		/*** 初始化 变体： 先获取数量 并初始化数组 Begins **/
		final int specificationOptionLength = specificationCodes.length; //参与增加商品的规格数量
		final int variantsCount = request.getParameterValues("specification_" + specificationCodes[0]).length; //变体数量
		final Variant[] variants = new Variant[variantsCount];
		for (int i = 0; i < variantsCount; i++)
		{
			variants[i] = new Variant();
			variants[i].setSpecificationValues(new String[specificationOptionLength]);
		}
		/*** 初始化 变体： 先获取数量 并初始化数组 Ends **/

		/*** 参数是以列为组进行提交的, 所以需要进行两次循环赋值 先依次给 所有变体赋上第N个规格值 ***/
		for (int i = 0; i < specificationOptionLength; i++)
		{
			final String[] specificationValueCodes = request.getParameterValues("specification_" + specificationCodes[i]);
			/*** specificationValueCodes.length 和 variantsCount 相等 **/
			for (int j = 0; j < variantsCount; j++)
			{
				variants[j].getSpecificationValues()[i] = specificationValueCodes[j];
			}
		}

		/*** 创建form **/
		final ProductForm form = new ProductForm();
		form.setBaseProduct(baseProduct);
		form.setSpecificationCodes(specificationCodes);
		form.setVariants(variants);
		return form;
	}

	protected List<Product> createVariants(final ProductForm productForm, final Goods goods)
	{
		final Product baseProduct = productForm.getBaseProduct();
		final List<Product> products = new ArrayList<Product>();
		final String[] specificationCodes = productForm.getSpecificationCodes();
		if (ArrayUtils.isEmpty(specificationCodes) || ArrayUtils.isEmpty(productForm.getVariants()))
		{
			LOG.debug("There is no variants for this product!");
			products.add(baseProduct);
			return products;
		}

		/***** 规格 *****/
		final Variant[] valueCodes = productForm.getVariants();
		final int variantsSize = valueCodes.length;


		final Set<Specification> specifications = new HashSet<Specification>();
		for (final String code : specificationCodes)
		{
			specifications.add(specificationService.findByCode(code));
		}


		/****************** 创建变体并初始值 begins *******************/
		for (int i = 0; i < variantsSize; i++)
		{
			final Product specificationProduct = new Product();
			BeanUtils.copyProperties(baseProduct, specificationProduct);
			specificationProduct.setId(null);
			specificationProduct.setCreateDate(null);
			specificationProduct.setModifyDate(null);
			specificationProduct.setSn(null);
			specificationProduct.setFullName(null);
			specificationProduct.setAllocatedStock(0);
			specificationProduct.setIsList(false);
			specificationProduct.setScore(0F);
			specificationProduct.setTotalScore(0L);
			specificationProduct.setScoreCount(0L);
			specificationProduct.setHits(0L);
			specificationProduct.setWeekHits(0L);
			specificationProduct.setMonthHits(0L);
			specificationProduct.setSales(0L);
			specificationProduct.setWeekSales(0L);
			specificationProduct.setMonthSales(0L);
			specificationProduct.setWeekHitsDate(new Date());
			specificationProduct.setMonthHitsDate(new Date());
			specificationProduct.setWeekSalesDate(new Date());
			specificationProduct.setMonthSalesDate(new Date());
			specificationProduct.setGoods(goods);
			specificationProduct.setReviews(null);
			specificationProduct.setConsultations(null);
			specificationProduct.setFavoriteMembers(null);
			specificationProduct.setSpecifications(specifications);

			specificationProduct.setSpecificationValues(new HashSet<SpecificationValue>());
			for (final String code : valueCodes[i].getSpecificationValues())
			{
				specificationProduct.getSpecificationValues().add(specificationValueService.findByCode(code));
			}

			specificationProduct.setPromotions(null);
			specificationProduct.setCartItems(null);
			specificationProduct.setOrderItems(null);
			specificationProduct.setGiftItems(null);
			specificationProduct.setProductNotifies(null);
			specificationProduct.setIsBaseProduct(Boolean.FALSE);
			specificationProduct.setBaseProduct(baseProduct);
			products.add(specificationProduct);
		}
		/****************** 创建变体并初始值 ends *******************/

		baseProduct.setStock(null);
		baseProduct.setSpecifications(specifications);
		baseProduct.setGoods(goods);
		products.add(baseProduct);
		return products;

	}
}
