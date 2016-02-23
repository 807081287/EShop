/**
 *
 */
package net.eshop.form;

import net.eshop.entity.Product;


public class ProductForm
{
	private Product baseProduct;

	private String[] specificationCodes;

	private Variant[] variants;//变体 - 规格商品

	/**
	 * @return the baseProduct
	 */
	public Product getBaseProduct()
	{
		return baseProduct;
	}

	/**
	 * @param baseProduct
	 *           the baseProduct to set
	 */
	public void setBaseProduct(final Product baseProduct)
	{
		this.baseProduct = baseProduct;
	}

	/**
	 * @return the specificationCodes
	 */
	public String[] getSpecificationCodes()
	{
		return specificationCodes;
	}

	/**
	 * @param specificationCodes
	 *           the specificationCodes to set
	 */
	public void setSpecificationCodes(final String[] specificationCodes)
	{
		this.specificationCodes = specificationCodes;
	}

	/**
	 * @return the variants
	 */
	public Variant[] getVariants()
	{
		return variants;
	}

	/**
	 * @param variants
	 *           the variants to set
	 */
	public void setVariants(final Variant[] variants)
	{
		this.variants = variants;
	}



}
