/*
 *
 *
 *
 */
package net.eshop.service;

import net.eshop.entity.Specification;
import net.eshop.entity.SpecificationValue;


/**
 * Service - 规格值
 *
 *
 *
 */
public interface SpecificationValueService extends BaseService<SpecificationValue, Long>
{
	SpecificationValue findByCode(String code, Specification specification);
}