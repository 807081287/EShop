/*
 *
 *
 *
 */
package net.eshop.service.impl;

import javax.annotation.Resource;

import net.eshop.dao.SpecificationValueDao;
import net.eshop.entity.Specification;
import net.eshop.entity.SpecificationValue;
import net.eshop.service.SpecificationValueService;

import org.springframework.stereotype.Service;


/**
 * Service - 规格值
 *
 *
 *
 */
@Service("specificationValueServiceImpl")
public class SpecificationValueServiceImpl extends BaseServiceImpl<SpecificationValue, Long> implements SpecificationValueService
{

	@Resource(name = "specificationValueDaoImpl")
	public void setBaseDao(final SpecificationValueDao specificationValueDao)
	{
		super.setBaseDao(specificationValueDao);
	}


	@Override
	public SpecificationValue findByCode(final String code, final Specification specification)
	{
		final SpecificationValueDao dao = (SpecificationValueDao) getBaseDao();
		return dao.findByCode(code, specification);
	}

}