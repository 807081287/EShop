/*
 *
 *
 *
 */
package net.eshop.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;


/**
 * Entity - 规格值
 *
 *
 *
 */
@Entity
@Table(name = "t_specification_value")
@SequenceGenerator(name = "sequenceGenerator", sequenceName = "t_specification_val_sequence")
public class SpecificationValue extends OrderEntity
{

	private static final long serialVersionUID = -8624741017444123488L;

	/**
	 * 唯一标识规格
	 */
	private String code;
	/** 名称 */
	private String name;

	/** 图片 */
	private String image;

	/** 规格 */
	private Specification specification;

	/** 商品 */
	private Set<Product> products = new HashSet<Product>();



	/**
	 * @return the code
	 */
	@NotEmpty
	@Length(max = 20)
	@Column(nullable = false, unique = true)
	public String getCode()
	{
		return code;
	}

	/**
	 * @param code
	 *           the code to set
	 */
	public void setCode(final String code)
	{
		this.code = code;
	}

	/**
	 * 获取名称
	 *
	 * @return 名称
	 */
	@NotEmpty
	@Length(max = 200)
	@Column(nullable = false)
	public String getName()
	{
		return name;
	}

	/**
	 * 设置名称
	 *
	 * @param name
	 *           名称
	 */
	public void setName(final String name)
	{
		this.name = name;
	}

	/**
	 * 获取图片
	 *
	 * @return 图片
	 */
	@Length(max = 200)
	public String getImage()
	{
		return image;
	}

	/**
	 * 设置图片
	 *
	 * @param image
	 *           图片
	 */
	public void setImage(final String image)
	{
		this.image = image;
	}

	/**
	 * 获取规格
	 *
	 * @return 规格
	 */
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(nullable = false)
	public Specification getSpecification()
	{
		return specification;
	}

	/**
	 * 设置规格
	 *
	 * @param specification
	 *           规格
	 */
	public void setSpecification(final Specification specification)
	{
		this.specification = specification;
	}

	/**
	 * 获取商品
	 *
	 * @return 商品
	 */
	@ManyToMany(mappedBy = "specificationValues", fetch = FetchType.LAZY)
	public Set<Product> getProducts()
	{
		return products;
	}

	/**
	 * 设置商品
	 *
	 * @param products
	 *           商品
	 */
	public void setProducts(final Set<Product> products)
	{
		this.products = products;
	}

}