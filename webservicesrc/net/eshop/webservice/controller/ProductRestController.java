/*
 *
 *
 *
 */
package net.eshop.webservice.controller;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolation;

import net.eshop.Message;
import net.eshop.controller.admin.AbstractProductController;
import net.eshop.entity.Goods;
import net.eshop.entity.Product;
import net.eshop.entity.ProductCategory;
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
import net.eshop.util.JsonUtils;
import net.eshop.webservice.response.Response;
import net.eshop.webservice.util.ResponseUtil;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;


/**
 * Controller - 商品
 *
 *
 *
 */
@Controller
public class ProductRestController extends AbstractProductController
{

	private static Logger LOG = Logger.getLogger(ProductRestController.class);

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



	@RequestMapping(value = "/rest/product/{id}", method = RequestMethod.GET)
	public ResponseEntity<Product> getProduct(@PathVariable("id") final long id, final HttpServletRequest request)
	{
		System.out.println("Fetching User with id " + id);
		final Product product = productService.find(id);
		if (product == null)
		{
			System.out.println("Product with id " + id + " not found");
			return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Product>(product, HttpStatus.OK);
	}

	@RequestMapping(value = "/rest/product", method = RequestMethod.POST)
	@ResponseBody
	public Response createProduct(@RequestBody final String productStr)
	{
		final List<ProductCategory> categories = productCategoryService.findRoots();
		Response response = null;
		final ProductForm productForm = JsonUtils.toObject(productStr, ProductForm.class);

		final Product product = productForm.getBaseProduct();

		product.setIsList(Boolean.FALSE);
		product.setIsGift(Boolean.FALSE);
		product.setIsBaseProduct(Boolean.TRUE);
		product.setIsMarketable(Boolean.FALSE);
		product.setIsTop(Boolean.FALSE);
		product.setProductCategory(categories.get(0));
		product.setPoint(calculateDefaultPoint(product.getPrice()));
		if (!isValid(product))
		{
			final StringBuffer sb = new StringBuffer();
			final RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();
			final Set<ConstraintViolation<Product>> constraintViolations = (Set<ConstraintViolation<Product>>) requestAttributes
					.getAttribute(CONSTRAINT_VIOLATIONS_ATTRIBUTE_NAME, RequestAttributes.SCOPE_REQUEST);
			for (final ConstraintViolation<Product> constraintViolation : constraintViolations)
			{
				sb.append(constraintViolation.getPropertyPath() + constraintViolation.getMessage() + ";");
			}
			response = ResponseUtil.createErrorResponse(sb.toString());
		}
		else
		{
			if (product.getMarketPrice() == null)
			{
				final BigDecimal defaultMarketPrice = calculateDefaultMarketPrice(product.getPrice());
				product.setMarketPrice(defaultMarketPrice);
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


			final Goods goods = new Goods();
			final List<Product> products = createVariants(productForm, goods);
			product.setGoods(goods);
			product.setSpecifications(null);
			product.setSpecificationValues(null);
			products.add(product);
			goods.getProducts().clear();
			goods.getProducts().addAll(products);
			try
			{
				goodsService.save(goods);
				response = ResponseUtil.createResponse();
			}
			catch (final Exception e)
			{
				LOG.error(e.getMessage());
				response = ResponseUtil.createErrorResponse(e.getMessage());
			}

		}
		return response;
	}






	/**
	 * 删除
	 */
	@RequestMapping(value = "/rest/product", method = RequestMethod.DELETE)
	public @ResponseBody Message delete(final Long[] ids)
	{
		productService.delete(ids);
		return SUCCESS_MESSAGE;
	}

}