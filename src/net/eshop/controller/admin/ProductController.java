/*
 *
 *
 *
 */
package net.eshop.controller.admin;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import net.eshop.FileInfo.FileType;
import net.eshop.Message;
import net.eshop.Pageable;
import net.eshop.entity.Attribute;
import net.eshop.entity.Brand;
import net.eshop.entity.Goods;
import net.eshop.entity.MemberRank;
import net.eshop.entity.Parameter;
import net.eshop.entity.ParameterGroup;
import net.eshop.entity.Product;
import net.eshop.entity.Product.OrderType;
import net.eshop.entity.ProductCategory;
import net.eshop.entity.ProductImage;
import net.eshop.entity.Promotion;
import net.eshop.entity.Specification;
import net.eshop.entity.SpecificationValue;
import net.eshop.entity.Tag;
import net.eshop.entity.Tag.Type;
import net.eshop.form.ProductForm;
import net.eshop.service.BrandService;
import net.eshop.service.FileService;
import net.eshop.service.GoodsService;
import net.eshop.service.MemberRankService;
import net.eshop.service.ProductCategoryService;
import net.eshop.service.ProductImageService;
import net.eshop.service.ProductService;
import net.eshop.service.PromotionService;
import net.eshop.service.SpecificationService;
import net.eshop.service.SpecificationValueService;
import net.eshop.service.TagService;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


/**
 * Controller - 商品
 *
 *
 *
 */
@Controller("adminProductController")
@RequestMapping("/admin/product")
public class ProductController extends AbstractProductController
{

	@Resource(name = "productServiceImpl")
	private ProductService productService;
	@Resource(name = "productCategoryServiceImpl")
	private ProductCategoryService productCategoryService;
	@Resource(name = "goodsServiceImpl")
	private GoodsService goodsService;
	@Resource(name = "brandServiceImpl")
	private BrandService brandService;
	@Resource(name = "promotionServiceImpl")
	private PromotionService promotionService;
	@Resource(name = "tagServiceImpl")
	private TagService tagService;
	@Resource(name = "memberRankServiceImpl")
	private MemberRankService memberRankService;
	@Resource(name = "productImageServiceImpl")
	private ProductImageService productImageService;
	@Resource(name = "specificationServiceImpl")
	private SpecificationService specificationService;
	@Resource(name = "specificationValueServiceImpl")
	private SpecificationValueService specificationValueService;
	@Resource(name = "fileServiceImpl")
	private FileService fileService;


	private final static Message DELETE_BASE_PROD_ERROR = Message.error("admin.message.error.variantsExist");

	/**
	 * 检查编号是否唯一
	 */
	@RequestMapping(value = "/check_sn", method = RequestMethod.GET)
	public @ResponseBody boolean checkSn(final String previousSn, final String sn)
	{
		if (StringUtils.isEmpty(sn))
		{
			return false;
		}
		if (productService.snUnique(previousSn, sn))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * 获取参数组
	 */
	@RequestMapping(value = "/parameter_groups", method = RequestMethod.GET)
	public @ResponseBody Set<ParameterGroup> parameterGroups(final Long id)
	{
		final ProductCategory productCategory = productCategoryService.find(id);
		return productCategory.getParameterGroups();
	}

	/**
	 * 获取属性
	 */
	@RequestMapping(value = "/attributes", method = RequestMethod.GET)
	public @ResponseBody Set<Attribute> attributes(final Long id)
	{
		final ProductCategory productCategory = productCategoryService.find(id);
		return productCategory.getAttributes();
	}

	/**
	 * 添加
	 */
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String add(final ModelMap model)
	{
		model.addAttribute("productCategoryTree", productCategoryService.findTree());
		model.addAttribute("brands", brandService.findAll());
		model.addAttribute("tags", tagService.findList(Type.product));
		model.addAttribute("memberRanks", memberRankService.findAll());
		model.addAttribute("specifications", specificationService.findAll());
		return "/admin/product/add";
	}

	/**
	 * 保存
	 *
	 * @param product
	 * @param productCategoryId
	 * @param brandId
	 * @param tagIds
	 * @param specificationIds
	 *           实际提交的是code
	 * @param request
	 * @param redirectAttributes
	 * @return
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String save(final Product product, final Long productCategoryId, final Long brandId, final Long[] tagIds,
			final String[] specificationIds, final HttpServletRequest request, final RedirectAttributes redirectAttributes)
	{
		for (final Iterator<ProductImage> iterator = product.getProductImages().iterator(); iterator.hasNext();)
		{
			final ProductImage productImage = iterator.next();
			if (productImage == null || productImage.isEmpty())
			{
				iterator.remove();
				continue;
			}
			if (productImage.getFile() != null && !productImage.getFile().isEmpty())
			{
				if (!fileService.isValid(FileType.image, productImage.getFile()))
				{
					addFlashMessage(redirectAttributes, Message.error("admin.upload.invalid"));
					return "redirect:add.jhtml";
				}
			}
		}
		product.setProductCategory(productCategoryService.find(productCategoryId));
		product.setBrand(brandService.find(brandId));
		product.setTags(new HashSet<Tag>(tagService.findList(tagIds)));
		if (!isValid(product))
		{
			return ERROR_VIEW;
		}
		if (StringUtils.isNotEmpty(product.getSn()) && productService.snExists(product.getSn()))
		{
			return ERROR_VIEW;
		}
		if (product.getMarketPrice() == null)
		{
			final BigDecimal defaultMarketPrice = calculateDefaultMarketPrice(product.getPrice());
			product.setMarketPrice(defaultMarketPrice);
		}
		if (product.getPoint() == null)
		{
			final long point = calculateDefaultPoint(product.getPrice());
			product.setPoint(point);
		}
		product.setFullName(null);
		product.setAllocatedStock(0);
		product.setScore(0F);
		product.setTotalScore(0L);
		product.setScoreCount(0L);
		product.setHits(0L);
		product.setWeekHits(0L);
		product.setMonthHits(0L);
		product.setSales(0L);
		product.setWeekSales(0L);
		product.setMonthSales(0L);
		product.setWeekHitsDate(new Date());
		product.setMonthHitsDate(new Date());
		product.setWeekSalesDate(new Date());
		product.setMonthSalesDate(new Date());
		product.setReviews(null);
		product.setConsultations(null);
		product.setFavoriteMembers(null);
		product.setPromotions(null);
		product.setCartItems(null);
		product.setOrderItems(null);
		product.setGiftItems(null);
		product.setProductNotifies(null);

		for (final MemberRank memberRank : memberRankService.findAll())
		{
			final String price = request.getParameter("memberPrice_" + memberRank.getId());
			if (StringUtils.isNotEmpty(price) && new BigDecimal(price).compareTo(new BigDecimal(0)) >= 0)
			{
				product.getMemberPrice().put(memberRank, new BigDecimal(price));
			}
			else
			{
				product.getMemberPrice().remove(memberRank);
			}
		}

		for (final ProductImage productImage : product.getProductImages())
		{
			productImageService.build(productImage);
		}
		Collections.sort(product.getProductImages());
		if (product.getImage() == null && product.getThumbnail() != null)
		{
			product.setImage(product.getThumbnail());
		}

		for (final ParameterGroup parameterGroup : product.getProductCategory().getParameterGroups())
		{
			for (final Parameter parameter : parameterGroup.getParameters())
			{
				final String parameterValue = request.getParameter("parameter_" + parameter.getId());
				if (StringUtils.isNotEmpty(parameterValue))
				{
					product.getParameterValue().put(parameter, parameterValue);
				}
				else
				{
					product.getParameterValue().remove(parameter);
				}
			}
		}

		for (final Attribute attribute : product.getProductCategory().getAttributes())
		{
			final String attributeValue = request.getParameter("attribute_" + attribute.getId());
			if (StringUtils.isNotEmpty(attributeValue))
			{
				product.setAttributeValue(attribute, attributeValue);
			}
			else
			{
				product.setAttributeValue(attribute, null);
			}
		}

		final Goods goods = new Goods();
		final List<Product> products = new ArrayList<Product>();
		if (ArrayUtils.isNotEmpty(specificationIds))
		{

			final ProductForm productForm = createProductForm(specificationIds, request, product);
			products.addAll(createVariants(productForm, goods));
		}
		else
		{
			product.setGoods(goods);
			products.add(product);
		}
		goods.getProducts().clear();
		goods.getProducts().addAll(products);
		goodsService.save(goods);
		addFlashMessage(redirectAttributes, SUCCESS_MESSAGE);
		return "redirect:list.jhtml";
	}

	/**
	 * 编辑
	 */
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String edit(final Long id, final ModelMap model)
	{
		model.addAttribute("productCategoryTree", productCategoryService.findTree());
		model.addAttribute("brands", brandService.findAll());
		model.addAttribute("tags", tagService.findList(Type.product));
		model.addAttribute("memberRanks", memberRankService.findAll());
		model.addAttribute("specifications", specificationService.findAll());
		model.addAttribute("product", productService.find(id));
		return "/admin/product/edit";
	}

	/**
	 * 更新
	 */
	@RequestMapping(value = "/updateOld", method = RequestMethod.POST)
	public String updateOld(final Product product, final Long productCategoryId, final Long brandId, final Long[] tagIds,
			final Long[] specificationIds, final Long[] specificationProductIds, final HttpServletRequest request,
			final RedirectAttributes redirectAttributes)
	{
		for (final Iterator<ProductImage> iterator = product.getProductImages().iterator(); iterator.hasNext();)
		{
			final ProductImage productImage = iterator.next();
			if (productImage == null || productImage.isEmpty())
			{
				iterator.remove();
				continue;
			}
			if (productImage.getFile() != null && !productImage.getFile().isEmpty())
			{
				if (!fileService.isValid(FileType.image, productImage.getFile()))
				{
					addFlashMessage(redirectAttributes, Message.error("admin.upload.invalid"));
					return "redirect:edit.jhtml?id=" + product.getId();
				}
			}
		}
		product.setProductCategory(productCategoryService.find(productCategoryId));
		product.setBrand(brandService.find(brandId));
		product.setTags(new HashSet<Tag>(tagService.findList(tagIds)));
		if (!isValid(product))
		{
			return ERROR_VIEW;
		}
		final Product pProduct = productService.find(product.getId());
		if (pProduct == null)
		{
			return ERROR_VIEW;
		}
		if (StringUtils.isNotEmpty(product.getSn()) && !productService.snUnique(pProduct.getSn(), product.getSn()))
		{
			return ERROR_VIEW;
		}
		if (product.getMarketPrice() == null)
		{
			final BigDecimal defaultMarketPrice = calculateDefaultMarketPrice(product.getPrice());
			product.setMarketPrice(defaultMarketPrice);
		}
		if (product.getPoint() == null)
		{
			final long point = calculateDefaultPoint(product.getPrice());
			product.setPoint(point);
		}

		for (final MemberRank memberRank : memberRankService.findAll())
		{
			final String price = request.getParameter("memberPrice_" + memberRank.getId());
			if (StringUtils.isNotEmpty(price) && new BigDecimal(price).compareTo(new BigDecimal(0)) >= 0)
			{
				product.getMemberPrice().put(memberRank, new BigDecimal(price));
			}
			else
			{
				product.getMemberPrice().remove(memberRank);
			}
		}

		for (final ProductImage productImage : product.getProductImages())
		{
			productImageService.build(productImage);
		}
		Collections.sort(product.getProductImages());
		if (product.getImage() == null && product.getThumbnail() != null)
		{
			product.setImage(product.getThumbnail());
		}

		for (final ParameterGroup parameterGroup : product.getProductCategory().getParameterGroups())
		{
			for (final Parameter parameter : parameterGroup.getParameters())
			{
				final String parameterValue = request.getParameter("parameter_" + parameter.getId());
				if (StringUtils.isNotEmpty(parameterValue))
				{
					product.getParameterValue().put(parameter, parameterValue);
				}
				else
				{
					product.getParameterValue().remove(parameter);
				}
			}
		}

		for (final Attribute attribute : product.getProductCategory().getAttributes())
		{
			final String attributeValue = request.getParameter("attribute_" + attribute.getId());
			if (StringUtils.isNotEmpty(attributeValue))
			{
				product.setAttributeValue(attribute, attributeValue);
			}
			else
			{
				product.setAttributeValue(attribute, null);
			}
		}

		final Goods goods = pProduct.getGoods();
		final List<Product> products = new ArrayList<Product>();
		if (specificationIds != null && specificationIds.length > 0)
		{
			for (int i = 0; i < specificationIds.length; i++)
			{
				final Specification specification = specificationService.find(specificationIds[i]);
				final String[] specificationValueIds = request.getParameterValues("specification_" + specification.getId());
				if (specificationValueIds != null && specificationValueIds.length > 0)
				{
					for (int j = 0; j < specificationValueIds.length; j++)
					{
						if (i == 0)
						{
							if (j == 0)
							{
								BeanUtils.copyProperties(product, pProduct, new String[]
								{ "id", "createDate", "modifyDate", "fullName", "allocatedStock", "score", "totalScore", "scoreCount",
										"hits", "weekHits", "monthHits", "sales", "weekSales", "monthSales", "weekHitsDate",
										"monthHitsDate", "weekSalesDate", "monthSalesDate", "goods", "reviews", "consultations",
										"favoriteMembers", "specifications", "specificationValues", "promotions", "cartItems",
										"orderItems", "giftItems", "productNotifies" });
								pProduct.setSpecifications(new HashSet<Specification>());
								pProduct.setSpecificationValues(new HashSet<SpecificationValue>());
								products.add(pProduct);
							}
							else
							{
								if (specificationProductIds != null && j < specificationProductIds.length)
								{
									final Product specificationProduct = productService.find(specificationProductIds[j]);
									if (specificationProduct == null
											|| (specificationProduct.getGoods() != null && !specificationProduct.getGoods().equals(goods)))
									{
										return ERROR_VIEW;
									}
									specificationProduct.setSpecifications(new HashSet<Specification>());
									specificationProduct.setSpecificationValues(new HashSet<SpecificationValue>());
									products.add(specificationProduct);
								}
								else
								{
									final Product specificationProduct = new Product();
									BeanUtils.copyProperties(product, specificationProduct);
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
									specificationProduct.setSpecifications(new HashSet<Specification>());
									specificationProduct.setSpecificationValues(new HashSet<SpecificationValue>());
									specificationProduct.setPromotions(null);
									specificationProduct.setCartItems(null);
									specificationProduct.setOrderItems(null);
									specificationProduct.setGiftItems(null);
									specificationProduct.setProductNotifies(null);
									products.add(specificationProduct);
								}
							}
						}
						final Product specificationProduct = products.get(j);
						final SpecificationValue specificationValue = specificationValueService.find(Long
								.valueOf(specificationValueIds[j]));
						specificationProduct.getSpecifications().add(specification);
						specificationProduct.getSpecificationValues().add(specificationValue);
					}
				}
			}
		}
		else
		{
			product.setSpecifications(null);
			product.setSpecificationValues(null);
			BeanUtils.copyProperties(product, pProduct, new String[]
			{ "id", "createDate", "modifyDate", "fullName", "allocatedStock", "score", "totalScore", "scoreCount", "hits",
					"weekHits", "monthHits", "sales", "weekSales", "monthSales", "weekHitsDate", "monthHitsDate", "weekSalesDate",
					"monthSalesDate", "goods", "reviews", "consultations", "favoriteMembers", "promotions", "cartItems", "orderItems",
					"giftItems", "productNotifies" });
		}
		goods.getProducts().clear();
		goods.getProducts().addAll(products);
		goods.getProducts().add(pProduct);
		goodsService.update(goods);
		addFlashMessage(redirectAttributes, SUCCESS_MESSAGE);
		return "redirect:list.jhtml";
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String update(final Product product, final Long productCategoryId, final Long brandId, final Long[] tagIds,
			final String[] specificationIds, final Long[] specificationProductIds, final HttpServletRequest request,
			final RedirectAttributes redirectAttributes)
	{
		for (final Iterator<ProductImage> iterator = product.getProductImages().iterator(); iterator.hasNext();)
		{
			final ProductImage productImage = iterator.next();
			if (productImage == null || productImage.isEmpty())
			{
				iterator.remove();
				continue;
			}
			if (productImage.getFile() != null && !productImage.getFile().isEmpty())
			{
				if (!fileService.isValid(FileType.image, productImage.getFile()))
				{
					addFlashMessage(redirectAttributes, Message.error("admin.upload.invalid"));
					return "redirect:edit.jhtml?id=" + product.getId();
				}
			}
		}
		product.setProductCategory(productCategoryService.find(productCategoryId));
		product.setBrand(brandService.find(brandId));
		product.setTags(new HashSet<Tag>(tagService.findList(tagIds)));
		if (!isValid(product))
		{
			return ERROR_VIEW;
		}
		final Product pProduct = productService.find(product.getId());
		if (pProduct == null)
		{
			return ERROR_VIEW;
		}
		if (StringUtils.isNotEmpty(product.getSn()) && !productService.snUnique(pProduct.getSn(), product.getSn()))
		{
			return ERROR_VIEW;
		}
		if (product.getMarketPrice() == null)
		{
			final BigDecimal defaultMarketPrice = calculateDefaultMarketPrice(product.getPrice());
			product.setMarketPrice(defaultMarketPrice);
		}
		if (product.getPoint() == null)
		{
			final long point = calculateDefaultPoint(product.getPrice());
			product.setPoint(point);
		}

		for (final MemberRank memberRank : memberRankService.findAll())
		{
			final String price = request.getParameter("memberPrice_" + memberRank.getId());
			if (StringUtils.isNotEmpty(price) && new BigDecimal(price).compareTo(new BigDecimal(0)) >= 0)
			{
				product.getMemberPrice().put(memberRank, new BigDecimal(price));
			}
			else
			{
				product.getMemberPrice().remove(memberRank);
			}
		}

		for (final ProductImage productImage : product.getProductImages())
		{
			productImageService.build(productImage);
		}
		Collections.sort(product.getProductImages());
		if (product.getImage() == null && product.getThumbnail() != null)
		{
			product.setImage(product.getThumbnail());
		}

		for (final ParameterGroup parameterGroup : product.getProductCategory().getParameterGroups())
		{
			for (final Parameter parameter : parameterGroup.getParameters())
			{
				final String parameterValue = request.getParameter("parameter_" + parameter.getId());
				if (StringUtils.isNotEmpty(parameterValue))
				{
					product.getParameterValue().put(parameter, parameterValue);
				}
				else
				{
					product.getParameterValue().remove(parameter);
				}
			}
		}

		for (final Attribute attribute : product.getProductCategory().getAttributes())
		{
			final String attributeValue = request.getParameter("attribute_" + attribute.getId());
			if (StringUtils.isNotEmpty(attributeValue))
			{
				product.setAttributeValue(attribute, attributeValue);
			}
			else
			{
				product.setAttributeValue(attribute, null);
			}
		}

		BeanUtils.copyProperties(product, pProduct, new String[]
		{ "id", "createDate", "modifyDate", "fullName", "allocatedStock", "score", "totalScore", "scoreCount", "hits", "weekHits",
				"monthHits", "sales", "weekSales", "monthSales", "weekHitsDate", "monthHitsDate", "weekSalesDate", "monthSalesDate",
				"goods", "reviews", "consultations", "favoriteMembers", "specifications", "specificationValues", "promotions",
				"cartItems", "orderItems", "giftItems", "productNotifies", "variants" });


		final Goods goods = pProduct.getGoods();
		final List<Product> variants = new ArrayList<Product>();
		if (ArrayUtils.isNotEmpty(specificationProductIds))
		{
			variants.addAll(productService.findList(specificationProductIds));
		}
		final ProductForm productForm = createProductForm(specificationIds, request, pProduct);
		variants.addAll(createVariants(productForm, goods));

		for (final Product prod : variants)
		{
			BeanUtils.copyProperties(product, prod, new String[]
			{ "id", "sn", "createDate", "modifyDate", "fullName", "stock", "allocatedStock", "score", "totalScore", "scoreCount",
					"hits", "weekHits", "monthHits", "sales", "weekSales", "monthSales", "weekHitsDate", "monthHitsDate",
					"weekSalesDate", "monthSalesDate", "goods", "reviews", "consultations", "favoriteMembers", "specifications",
					"specificationValues", "promotions", "cartItems", "orderItems", "giftItems", "productNotifies", "isBaseProduct",
					"baseProduct" });
		}

		goods.getProducts().clear();
		goods.getProducts().addAll(variants);
		goods.getProducts().add(pProduct);
		goodsService.update(goods);
		addFlashMessage(redirectAttributes, SUCCESS_MESSAGE);
		return "redirect:list.jhtml";
	}

	/**
	 * 列表 Change on 2016/2/24: 默认isBaseProduct=true,只查询baseProduct
	 */
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(final Long productCategoryId, final Long brandId, final Long promotionId, final Long tagId,
			final Boolean isMarketable, final Boolean isList, final Boolean isTop, final Boolean isGift, final Boolean isOutOfStock,
			final Boolean isStockAlert, final Pageable pageable, final ModelMap model)
	{
		final ProductCategory productCategory = productCategoryService.find(productCategoryId);
		final Brand brand = brandService.find(brandId);
		final Promotion promotion = promotionService.find(promotionId);
		final List<Tag> tags = tagService.findList(tagId);
		model.addAttribute("productCategoryTree", productCategoryService.findTree());
		model.addAttribute("brands", brandService.findAll());
		model.addAttribute("promotions", promotionService.findAll());
		model.addAttribute("tags", tagService.findList(Type.product));
		model.addAttribute("productCategoryId", productCategoryId);
		model.addAttribute("brandId", brandId);
		model.addAttribute("promotionId", promotionId);
		model.addAttribute("tagId", tagId);
		model.addAttribute("isMarketable", isMarketable);

		model.addAttribute("isBaseProduct");
		model.addAttribute("isList", isList);
		model.addAttribute("isTop", isTop);
		model.addAttribute("isGift", isGift);
		model.addAttribute("isOutOfStock", isOutOfStock);
		model.addAttribute("isStockAlert", isStockAlert);
		model.addAttribute("page", productService.findPage(productCategory, brand, promotion, tags, null, null, null, Boolean.TRUE,
				isMarketable, isList, isTop, isGift, isOutOfStock, isStockAlert, OrderType.dateDesc, pageable));
		return "/admin/product/list";
	}

	/**
	 * 删除
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public @ResponseBody Message delete(final Long[] ids)
	{
		for (final Long long1 : ids)
		{
			final Product product = productService.find(long1);
			if (Boolean.TRUE.equals(product.getIsBaseProduct()))
			{
				final Set<Product> variants = product.getVariants();
				for (final Product variant : variants)
				{
					productService.delete(variant);
				}
			}
			product.getVariants().clear();
			productService.delete(product);
		}
		/*
		 * if (ArrayUtils.isEmpty(ids) || ids.length > 1) { return ERROR_MESSAGE; } final Product product =
		 * productService.find(ids[0]); if (CollectionUtils.isNotEmpty(product.getVariants())) { return
		 * DELETE_BASE_PROD_ERROR; } productService.delete(ids[0]);
		 */
		return SUCCESS_MESSAGE;
	}

	/**
	 * 删除
	 */
	@RequestMapping(value = "/deleteSingle", method = RequestMethod.POST)
	public @ResponseBody Message deleteSingle(final Long id)
	{
		productService.delete(id);
		return SUCCESS_MESSAGE;
	}

}