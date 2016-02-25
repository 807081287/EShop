/*
 *
 *
 *
 */
package net.eshop.dao.impl;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import net.eshop.dao.SpecificationValueDao;
import net.eshop.entity.Specification;
import net.eshop.entity.SpecificationValue;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Repository;


/**
 * Dao - 规格值
 *
 *
 *
 */
@Repository("specificationValueDaoImpl")
public class SpecificationValueDaoImpl extends BaseDaoImpl<SpecificationValue, Long> implements SpecificationValueDao
{


	@Override
	public SpecificationValue findByCode(final String code, final Specification specification)
	{
		final Class<SpecificationValue> entityClass = SpecificationValue.class;
		if (StringUtils.isNotEmpty(code))
		{
			final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
			final CriteriaQuery<SpecificationValue> criteriaQuery = criteriaBuilder.createQuery(entityClass);
			final Root<SpecificationValue> root = criteriaQuery.from(entityClass);
			Predicate restrictions = criteriaBuilder.conjunction();
			restrictions = criteriaBuilder.and(restrictions, criteriaBuilder.equal(root.get("code"), code),
					criteriaBuilder.equal(root.get("specification"), specification));

			criteriaQuery.where(restrictions);
			final List<SpecificationValue> list = entityManager.createQuery(criteriaQuery).getResultList();
			if (CollectionUtils.isEmpty(list))
			{
				return null;
			}
			else
			{
				return list.get(0);
			}
		}
		return null;
	}

}