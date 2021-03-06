/*
 *
 *
 *
 */
package net.eshop.controller.shop;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import net.eshop.Pageable;
import net.eshop.ResourceNotFoundException;
import net.eshop.entity.Attribute;
import net.eshop.entity.Brand;
import net.eshop.entity.Product;
import net.eshop.entity.Product.OrderType;
import net.eshop.entity.ProductCategory;
import net.eshop.entity.Promotion;
import net.eshop.entity.Tag;
import net.eshop.service.BrandService;
import net.eshop.service.ProductCategoryService;
import net.eshop.service.ProductService;
import net.eshop.service.PromotionService;
import net.eshop.service.SearchService;
import net.eshop.service.TagService;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * Controller - 商品
 *
 *
 *
 */
@Controller("shopProductController")
@RequestMapping("/product")
public class ProductController extends BaseController
{

	@Resource(name = "productServiceImpl")
	private ProductService productService;
	@Resource(name = "productCategoryServiceImpl")
	private ProductCategoryService productCategoryService;
	@Resource(name = "brandServiceImpl")
	private BrandService brandService;
	@Resource(name = "promotionServiceImpl")
	private PromotionService promotionService;
	@Resource(name = "tagServiceImpl")
	private TagService tagService;
	@Resource(name = "searchServiceImpl")
	private SearchService searchService;

	/**
	 * 浏览记录
	 */
	@RequestMapping(value = "/history", method = RequestMethod.GET)
	public @ResponseBody List<Product> history(final Long[] ids)
	{
		return productService.findList(ids);
	}

	/**
	 * 列表
	 */
	@RequestMapping(value = "/list/{productCategoryId}", method = RequestMethod.GET)
	public String list(@PathVariable final Long productCategoryId, final Long brandId, final Long promotionId,
			final Long[] tagIds, final BigDecimal startPrice, final BigDecimal endPrice, final OrderType orderType,
			final Integer pageNumber, final Integer pageSize, final HttpServletRequest request, final ModelMap model)
	{
		final ProductCategory productCategory = productCategoryService.find(productCategoryId);
		if (productCategory == null)
		{
			throw new ResourceNotFoundException();
		}
		final Brand brand = brandService.find(brandId);
		final Promotion promotion = promotionService.find(promotionId);
		final List<Tag> tags = tagService.findList(tagIds);
		final Map<Attribute, String> attributeValue = new HashMap<Attribute, String>();

		final Set<Attribute> attributes = productCategory.getAttributes();
		for (final Attribute attribute : attributes)
		{
			final String value = request.getParameter("attribute_" + attribute.getId());
			if (StringUtils.isNotEmpty(value) && attribute.getOptions().contains(value))
			{
				attributeValue.put(attribute, value);
			}
		}

		final Pageable pageable = new Pageable(pageNumber, pageSize);
		model.addAttribute("orderTypes", OrderType.values());
		model.addAttribute("productCategory", productCategory);
		model.addAttribute("brand", brand);
		model.addAttribute("promotion", promotion);
		model.addAttribute("tags", tags);
		model.addAttribute("attributeValue", attributeValue);
		model.addAttribute("startPrice", startPrice);
		model.addAttribute("endPrice", endPrice);
		model.addAttribute("orderType", orderType);
		model.addAttribute("pageNumber", pageNumber);
		model.addAttribute("pageSize", pageSize);
		model.addAttribute("page", productService.findPage(productCategory, brand, promotion, tags, attributeValue, startPrice,
				endPrice, true, true, null, false, null, null, orderType, pageable));
		return "/shop/product/list";
	}

	/**
	 * 列表
	 */
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(final Long brandId, final Long promotionId, final Long[] tagIds, final BigDecimal startPrice,
			final BigDecimal endPrice, final OrderType orderType, final Integer pageNumber, final Integer pageSize,
			final HttpServletRequest request, final ModelMap model)
	{
		final Brand brand = brandService.find(brandId);
		final Promotion promotion = promotionService.find(promotionId);
		final List<Tag> tags = tagService.findList(tagIds);
		final Pageable pageable = new Pageable(pageNumber, pageSize);
		model.addAttribute("orderTypes", OrderType.values());
		model.addAttribute("brand", brand);
		model.addAttribute("promotion", promotion);
		model.addAttribute("tags", tags);
		model.addAttribute("startPrice", startPrice);
		model.addAttribute("endPrice", endPrice);
		model.addAttribute("orderType", orderType);
		model.addAttribute("pageNumber", pageNumber);
		model.addAttribute("pageSize", pageSize);
		model.addAttribute("page", productService.findPage(null, brand, promotion, tags, null, startPrice, endPrice, true, true,
				null, false, null, null, orderType, pageable));
		return "/shop/product/list";
	}

	/**
	 * 搜索
	 */
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public String search(final String keyword, final BigDecimal startPrice, final BigDecimal endPrice, final OrderType orderType,
			final Integer pageNumber, final Integer pageSize, final ModelMap model)
	{
		if (StringUtils.isEmpty(keyword))
		{
			return ERROR_VIEW;
		}
		final Pageable pageable = new Pageable(pageNumber, pageSize);
		model.addAttribute("orderTypes", OrderType.values());
		model.addAttribute("productKeyword", keyword);
		model.addAttribute("startPrice", startPrice);
		model.addAttribute("endPrice", endPrice);
		model.addAttribute("orderType", orderType);
		model.addAttribute("page", searchService.search(keyword, startPrice, endPrice, orderType, pageable));
		return "shop/product/search";
	}

	/**
	 * 点击数
	 */
	@RequestMapping(value = "/hits/{id}", method = RequestMethod.GET)
	public @ResponseBody Long hits(@PathVariable final Long id)
	{
		return productService.viewHits(id);
	}

}