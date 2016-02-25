/*
 *
 *
 *
 */
package net.eshop.webservice.services.impl;

import java.util.List;

import javax.annotation.Resource;

import net.eshop.dao.SpecificationDao;
import net.eshop.entity.Specification;
import net.eshop.entity.Specification.Type;
import net.eshop.entity.SpecificationValue;
import net.eshop.service.SpecificationValueService;
import net.eshop.service.impl.BaseServiceImpl;
import net.eshop.webservice.services.SpecificationRestService;

import org.apache.commons.collections.CollectionUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service - 规格
 *
 *
 *
 */
@Service("specificationRestServiceImpl")
public class SpecificationRestServiceImpl extends BaseServiceImpl<Specification, Long> implements SpecificationRestService
{
	private static final Logger LOG = Logger.getLogger(SpecificationRestServiceImpl.class);
	@Resource(name = "specificationValueServiceImpl")
	private SpecificationValueService specificationValueService;

	@Resource(name = "specificationDaoImpl")
	public void setBaseDao(final SpecificationDao specificationDao)
	{
		super.setBaseDao(specificationDao);
	}



	@Transactional
	@Override
	public void save(final Specification entity)
	{
		entity.setType(Type.text);
		final List<SpecificationValue> values = entity.getSpecificationValues();
		if (CollectionUtils.isNotEmpty(values))
		{
			for (final SpecificationValue specificationValue : values)
			{
				specificationValue.setSpecification(entity);
			}
		}
		super.save(entity);
	}



	@Transactional
	@Override
	public void updateOrCreate(final Specification entity) throws Throwable
	{

		final Specification specification = findByCode(entity.getCode());
		if (specification == null)
		{
			save(entity);
		}
		else
		{
			specification.setName(entity.getName());
			final List<SpecificationValue> values = entity.getSpecificationValues();
			if (CollectionUtils.isNotEmpty(values))
			{
				SpecificationValue tSpecificationValue = null;
				for (final SpecificationValue specificationValue : values)
				{
					tSpecificationValue = getFromList(specification.getSpecificationValues(), specificationValue.getCode());
					if (tSpecificationValue != null)
					{
						tSpecificationValue.setName(specificationValue.getName());
					}
					else
					{
						specificationValue.setSpecification(specification);
						specification.getSpecificationValues().add(specificationValue);
					}

				}
			}
			super.update(specification);
		}
	}

	private SpecificationValue getFromList(final List<SpecificationValue> list, final String code)
	{
		if (CollectionUtils.isNotEmpty(list))
		{
			for (final SpecificationValue specificationValue : list)
			{
				if (specificationValue.getCode().equals(code))
				{
					return specificationValue;
				}
			}
		}
		return null;
	}

}