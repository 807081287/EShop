/*
 *
 *
 *
 */
package net.eshop.dao;

import net.eshop.entity.Specification;
import net.eshop.entity.SpecificationValue;


/**
 * Dao - 规格值
 *
 *
 *
 */
public interface SpecificationValueDao extends BaseDao<SpecificationValue, Long>
{
	SpecificationValue findByCode(String code, Specification specification);
}