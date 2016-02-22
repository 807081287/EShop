/**
 *
 */
package net.eshop.form;

import net.eshop.entity.Product;


public class ProductForm
{
	private Product baseProduct;

	private String[] specificationCodes;

	private SpecificationValueCode[] specificationValues;

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
	 * @return the specificationValues
	 */
	public SpecificationValueCode[] getSpecificationValues()
	{
		return specificationValues;
	}

	/**
	 * @param specificationValues
	 *           the specificationValues to set
	 */
	public void setSpecificationValues(final SpecificationValueCode[] specificationValues)
	{
		this.specificationValues = specificationValues;
	}

}
