/*
 *
 *
 *
 */
package net.eshop.dao.impl;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.FlushModeType;
import javax.persistence.LockModeType;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Fetch;
import javax.persistence.criteria.From;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.Selection;

import net.eshop.Filter;
import net.eshop.Filter.Operator;
import net.eshop.Order;
import net.eshop.Order.Direction;
import net.eshop.Page;
import net.eshop.Pageable;
import net.eshop.dao.BaseDao;
import net.eshop.entity.OrderEntity;

import org.apache.commons.lang.StringUtils;
import org.springframework.util.Assert;


/**
 * Dao - 基类
 *
 *
 *
 */
public abstract class BaseDaoImpl<T, ID extends Serializable> implements BaseDao<T, ID>
{

	/** 实体类类型 */
	private final Class<T> entityClass;

	/** 别名数 */
	private static volatile long aliasCount = 0;

	@PersistenceContext
	protected EntityManager entityManager;

	@SuppressWarnings("unchecked")
	public BaseDaoImpl()
	{
		final Type type = getClass().getGenericSuperclass();
		final Type[] parameterizedType = ((ParameterizedType) type).getActualTypeArguments();
		entityClass = (Class<T>) parameterizedType[0];
	}

	public T find(final ID id)
	{
		if (id != null)
		{
			return entityManager.find(entityClass, id);
		}
		return null;
	}

	public T findByCode(final String code)
	{
		if (StringUtils.isNotEmpty(code))
		{
			final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
			final CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(entityClass);
			final Root<T> root = criteriaQuery.from(entityClass);
			Predicate restrictions = criteriaBuilder.conjunction();
			restrictions = criteriaBuilder.and(restrictions, criteriaBuilder.equal(root.get("code"), code));
			criteriaQuery.where(restrictions);
			return entityManager.createQuery(criteriaQuery).getSingleResult();
		}
		return null;
	}

	public T find(final ID id, final LockModeType lockModeType)
	{
		if (id != null)
		{
			if (lockModeType != null)
			{
				return entityManager.find(entityClass, id, lockModeType);
			}
			else
			{
				return entityManager.find(entityClass, id);
			}
		}
		return null;
	}

	public List<T> findList(final Integer first, final Integer count, final List<Filter> filters, final List<Order> orders)
	{
		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		final CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(entityClass);
		criteriaQuery.select(criteriaQuery.from(entityClass));
		return findList(criteriaQuery, first, count, filters, orders);
	}

	public Page<T> findPage(final Pageable pageable)
	{
		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		final CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(entityClass);
		criteriaQuery.select(criteriaQuery.from(entityClass));
		return findPage(criteriaQuery, pageable);
	}

	public long count(final Filter... filters)
	{
		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		final CriteriaQuery<T> criteriaQuery = criteriaBuilder.createQuery(entityClass);
		criteriaQuery.select(criteriaQuery.from(entityClass));
		return count(criteriaQuery, filters != null ? Arrays.asList(filters) : null);
	}

	public void persist(final T entity)
	{
		Assert.notNull(entity);
		entityManager.persist(entity);
	}

	public T merge(final T entity)
	{
		Assert.notNull(entity);
		return entityManager.merge(entity);
	}

	public void remove(final T entity)
	{
		if (entity != null)
		{
			entityManager.remove(entity);
		}
	}

	public void refresh(final T entity)
	{
		if (entity != null)
		{
			entityManager.refresh(entity);
		}
	}

	public void refresh(final T entity, final LockModeType lockModeType)
	{
		if (entity != null)
		{
			if (lockModeType != null)
			{
				entityManager.refresh(entity, lockModeType);
			}
			else
			{
				entityManager.refresh(entity);
			}
		}
	}

	@SuppressWarnings("unchecked")
	public ID getIdentifier(final T entity)
	{
		Assert.notNull(entity);
		return (ID) entityManager.getEntityManagerFactory().getPersistenceUnitUtil().getIdentifier(entity);
	}

	public boolean isManaged(final T entity)
	{
		return entityManager.contains(entity);
	}

	public void detach(final T entity)
	{
		entityManager.detach(entity);
	}

	public void lock(final T entity, final LockModeType lockModeType)
	{
		if (entity != null && lockModeType != null)
		{
			entityManager.lock(entity, lockModeType);
		}
	}

	public void clear()
	{
		entityManager.clear();
	}

	public void flush()
	{
		entityManager.flush();
	}

	protected List<T> findList(final CriteriaQuery<T> criteriaQuery, final Integer first, final Integer count,
			final List<Filter> filters, final List<Order> orders)
	{
		Assert.notNull(criteriaQuery);
		Assert.notNull(criteriaQuery.getSelection());
		Assert.notEmpty(criteriaQuery.getRoots());

		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		final Root<T> root = getRoot(criteriaQuery);
		addRestrictions(criteriaQuery, filters);
		addOrders(criteriaQuery, orders);
		if (criteriaQuery.getOrderList().isEmpty())
		{
			if (OrderEntity.class.isAssignableFrom(entityClass))
			{
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get(OrderEntity.ORDER_PROPERTY_NAME)));
			}
			else
			{
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get(OrderEntity.CREATE_DATE_PROPERTY_NAME)));
			}
		}
		final TypedQuery<T> query = entityManager.createQuery(criteriaQuery).setFlushMode(FlushModeType.COMMIT);
		if (first != null)
		{
			query.setFirstResult(first);
		}
		if (count != null)
		{
			query.setMaxResults(count);
		}
		return query.getResultList();
	}

	protected Page<T> findPage(final CriteriaQuery<T> criteriaQuery, Pageable pageable)
	{
		Assert.notNull(criteriaQuery);
		Assert.notNull(criteriaQuery.getSelection());
		Assert.notEmpty(criteriaQuery.getRoots());

		if (pageable == null)
		{
			pageable = new Pageable();
		}
		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		final Root<T> root = getRoot(criteriaQuery);
		addRestrictions(criteriaQuery, pageable);
		addOrders(criteriaQuery, pageable);
		if (criteriaQuery.getOrderList().isEmpty())
		{
			if (OrderEntity.class.isAssignableFrom(entityClass))
			{
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get(OrderEntity.ORDER_PROPERTY_NAME)));
			}
			else
			{
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get(OrderEntity.CREATE_DATE_PROPERTY_NAME)));
			}
		}
		final long total = count(criteriaQuery, null);
		final int totalPages = (int) Math.ceil((double) total / (double) pageable.getPageSize());
		if (totalPages < pageable.getPageNumber())
		{
			pageable.setPageNumber(totalPages);
		}
		final TypedQuery<T> query = entityManager.createQuery(criteriaQuery).setFlushMode(FlushModeType.COMMIT);
		query.setFirstResult((pageable.getPageNumber() - 1) * pageable.getPageSize());
		query.setMaxResults(pageable.getPageSize());
		return new Page<T>(query.getResultList(), total, pageable);
	}

	protected Long count(final CriteriaQuery<T> criteriaQuery, final List<Filter> filters)
	{
		Assert.notNull(criteriaQuery);
		Assert.notNull(criteriaQuery.getSelection());
		Assert.notEmpty(criteriaQuery.getRoots());

		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		addRestrictions(criteriaQuery, filters);

		final CriteriaQuery<Long> countCriteriaQuery = criteriaBuilder.createQuery(Long.class);
		for (final Root<?> root : criteriaQuery.getRoots())
		{
			final Root<?> dest = countCriteriaQuery.from(root.getJavaType());
			dest.alias(getAlias(root));
			copyJoins(root, dest);
		}

		final Root<?> countRoot = getRoot(countCriteriaQuery, criteriaQuery.getResultType());
		countCriteriaQuery.select(criteriaBuilder.count(countRoot));

		if (criteriaQuery.getGroupList() != null)
		{
			countCriteriaQuery.groupBy(criteriaQuery.getGroupList());
		}
		if (criteriaQuery.getGroupRestriction() != null)
		{
			countCriteriaQuery.having(criteriaQuery.getGroupRestriction());
		}
		if (criteriaQuery.getRestriction() != null)
		{
			countCriteriaQuery.where(criteriaQuery.getRestriction());
		}
		return entityManager.createQuery(countCriteriaQuery).setFlushMode(FlushModeType.COMMIT).getSingleResult();
	}

	private synchronized String getAlias(final Selection<?> selection)
	{
		if (selection != null)
		{
			String alias = selection.getAlias();
			if (alias == null)
			{
				if (aliasCount >= 1000)
				{
					aliasCount = 0;
				}
				alias = "eshopGeneratedAlias" + aliasCount++;
				selection.alias(alias);
			}
			return alias;
		}
		return null;
	}

	private Root<T> getRoot(final CriteriaQuery<T> criteriaQuery)
	{
		if (criteriaQuery != null)
		{
			return getRoot(criteriaQuery, criteriaQuery.getResultType());
		}
		return null;
	}

	private Root<T> getRoot(final CriteriaQuery<?> criteriaQuery, final Class<T> clazz)
	{
		if (criteriaQuery != null && criteriaQuery.getRoots() != null && clazz != null)
		{
			for (final Root<?> root : criteriaQuery.getRoots())
			{
				if (clazz.equals(root.getJavaType()))
				{
					return (Root<T>) root.as(clazz);
				}
			}
		}
		return null;
	}

	private void copyJoins(final From<?, ?> from, final From<?, ?> to)
	{
		for (final Join<?, ?> join : from.getJoins())
		{
			final Join<?, ?> toJoin = to.join(join.getAttribute().getName(), join.getJoinType());
			toJoin.alias(getAlias(join));
			copyJoins(join, toJoin);
		}
		for (final Fetch<?, ?> fetch : from.getFetches())
		{
			final Fetch<?, ?> toFetch = to.fetch(fetch.getAttribute().getName());
			copyFetches(fetch, toFetch);
		}
	}

	private void copyFetches(final Fetch<?, ?> from, final Fetch<?, ?> to)
	{
		for (final Fetch<?, ?> fetch : from.getFetches())
		{
			final Fetch<?, ?> toFetch = to.fetch(fetch.getAttribute().getName());
			copyFetches(fetch, toFetch);
		}
	}

	private void addRestrictions(final CriteriaQuery<T> criteriaQuery, final List<Filter> filters)
	{
		if (criteriaQuery == null || filters == null || filters.isEmpty())
		{
			return;
		}
		final Root<T> root = getRoot(criteriaQuery);
		if (root == null)
		{
			return;
		}
		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		Predicate restrictions = criteriaQuery.getRestriction() != null ? criteriaQuery.getRestriction() : criteriaBuilder
				.conjunction();
		for (final Filter filter : filters)
		{
			if (filter == null || StringUtils.isEmpty(filter.getProperty()))
			{
				continue;
			}
			if (filter.getOperator() == Operator.eq && filter.getValue() != null)
			{
				if (filter.getIgnoreCase() != null && filter.getIgnoreCase() && filter.getValue() instanceof String)
				{
					restrictions = criteriaBuilder.and(
							restrictions,
							criteriaBuilder.equal(criteriaBuilder.lower(root.<String> get(filter.getProperty())),
									((String) filter.getValue()).toLowerCase()));
				}
				else
				{
					restrictions = criteriaBuilder.and(restrictions,
							criteriaBuilder.equal(root.get(filter.getProperty()), filter.getValue()));
				}
			}
			else if (filter.getOperator() == Operator.ne && filter.getValue() != null)
			{
				if (filter.getIgnoreCase() != null && filter.getIgnoreCase() && filter.getValue() instanceof String)
				{
					restrictions = criteriaBuilder.and(
							restrictions,
							criteriaBuilder.notEqual(criteriaBuilder.lower(root.<String> get(filter.getProperty())),
									((String) filter.getValue()).toLowerCase()));
				}
				else
				{
					restrictions = criteriaBuilder.and(restrictions,
							criteriaBuilder.notEqual(root.get(filter.getProperty()), filter.getValue()));
				}
			}
			else if (filter.getOperator() == Operator.gt && filter.getValue() != null)
			{
				restrictions = criteriaBuilder.and(restrictions,
						criteriaBuilder.gt(root.<Number> get(filter.getProperty()), (Number) filter.getValue()));
			}
			else if (filter.getOperator() == Operator.lt && filter.getValue() != null)
			{
				restrictions = criteriaBuilder.and(restrictions,
						criteriaBuilder.lt(root.<Number> get(filter.getProperty()), (Number) filter.getValue()));
			}
			else if (filter.getOperator() == Operator.ge && filter.getValue() != null)
			{
				restrictions = criteriaBuilder.and(restrictions,
						criteriaBuilder.ge(root.<Number> get(filter.getProperty()), (Number) filter.getValue()));
			}
			else if (filter.getOperator() == Operator.le && filter.getValue() != null)
			{
				restrictions = criteriaBuilder.and(restrictions,
						criteriaBuilder.le(root.<Number> get(filter.getProperty()), (Number) filter.getValue()));
			}
			else if (filter.getOperator() == Operator.like && filter.getValue() != null && filter.getValue() instanceof String)
			{
				restrictions = criteriaBuilder.and(restrictions,
						criteriaBuilder.like(root.<String> get(filter.getProperty()), (String) filter.getValue()));
			}
			else if (filter.getOperator() == Operator.in && filter.getValue() != null)
			{
				restrictions = criteriaBuilder.and(restrictions, root.get(filter.getProperty()).in(filter.getValue()));
			}
			else if (filter.getOperator() == Operator.isNull)
			{
				restrictions = criteriaBuilder.and(restrictions, root.get(filter.getProperty()).isNull());
			}
			else if (filter.getOperator() == Operator.isNotNull)
			{
				restrictions = criteriaBuilder.and(restrictions, root.get(filter.getProperty()).isNotNull());
			}
		}
		criteriaQuery.where(restrictions);
	}

	private void addRestrictions(final CriteriaQuery<T> criteriaQuery, final Pageable pageable)
	{
		if (criteriaQuery == null || pageable == null)
		{
			return;
		}
		final Root<T> root = getRoot(criteriaQuery);
		if (root == null)
		{
			return;
		}
		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		Predicate restrictions = criteriaQuery.getRestriction() != null ? criteriaQuery.getRestriction() : criteriaBuilder
				.conjunction();
		if (StringUtils.isNotEmpty(pageable.getSearchProperty()) && StringUtils.isNotEmpty(pageable.getSearchValue()))
		{
			restrictions = criteriaBuilder.and(restrictions,
					criteriaBuilder.like(root.<String> get(pageable.getSearchProperty()), "%" + pageable.getSearchValue() + "%"));
		}
		if (pageable.getFilters() != null)
		{
			for (final Filter filter : pageable.getFilters())
			{
				if (filter == null || StringUtils.isEmpty(filter.getProperty()))
				{
					continue;
				}
				if (filter.getOperator() == Operator.eq && filter.getValue() != null)
				{
					if (filter.getIgnoreCase() != null && filter.getIgnoreCase() && filter.getValue() instanceof String)
					{
						restrictions = criteriaBuilder.and(
								restrictions,
								criteriaBuilder.equal(criteriaBuilder.lower(root.<String> get(filter.getProperty())),
										((String) filter.getValue()).toLowerCase()));
					}
					else
					{
						restrictions = criteriaBuilder.and(restrictions,
								criteriaBuilder.equal(root.get(filter.getProperty()), filter.getValue()));
					}
				}
				else if (filter.getOperator() == Operator.ne && filter.getValue() != null)
				{
					if (filter.getIgnoreCase() != null && filter.getIgnoreCase() && filter.getValue() instanceof String)
					{
						restrictions = criteriaBuilder.and(
								restrictions,
								criteriaBuilder.notEqual(criteriaBuilder.lower(root.<String> get(filter.getProperty())),
										((String) filter.getValue()).toLowerCase()));
					}
					else
					{
						restrictions = criteriaBuilder.and(restrictions,
								criteriaBuilder.notEqual(root.get(filter.getProperty()), filter.getValue()));
					}
				}
				else if (filter.getOperator() == Operator.gt && filter.getValue() != null)
				{
					restrictions = criteriaBuilder.and(restrictions,
							criteriaBuilder.gt(root.<Number> get(filter.getProperty()), (Number) filter.getValue()));
				}
				else if (filter.getOperator() == Operator.lt && filter.getValue() != null)
				{
					restrictions = criteriaBuilder.and(restrictions,
							criteriaBuilder.lt(root.<Number> get(filter.getProperty()), (Number) filter.getValue()));
				}
				else if (filter.getOperator() == Operator.ge && filter.getValue() != null)
				{
					restrictions = criteriaBuilder.and(restrictions,
							criteriaBuilder.ge(root.<Number> get(filter.getProperty()), (Number) filter.getValue()));
				}
				else if (filter.getOperator() == Operator.le && filter.getValue() != null)
				{
					restrictions = criteriaBuilder.and(restrictions,
							criteriaBuilder.le(root.<Number> get(filter.getProperty()), (Number) filter.getValue()));
				}
				else if (filter.getOperator() == Operator.like && filter.getValue() != null && filter.getValue() instanceof String)
				{
					restrictions = criteriaBuilder.and(restrictions,
							criteriaBuilder.like(root.<String> get(filter.getProperty()), (String) filter.getValue()));
				}
				else if (filter.getOperator() == Operator.in && filter.getValue() != null)
				{
					restrictions = criteriaBuilder.and(restrictions, root.get(filter.getProperty()).in(filter.getValue()));
				}
				else if (filter.getOperator() == Operator.isNull)
				{
					restrictions = criteriaBuilder.and(restrictions, root.get(filter.getProperty()).isNull());
				}
				else if (filter.getOperator() == Operator.isNotNull)
				{
					restrictions = criteriaBuilder.and(restrictions, root.get(filter.getProperty()).isNotNull());
				}
			}
		}
		criteriaQuery.where(restrictions);
	}

	private void addOrders(final CriteriaQuery<T> criteriaQuery, final List<Order> orders)
	{
		if (criteriaQuery == null || orders == null || orders.isEmpty())
		{
			return;
		}
		final Root<T> root = getRoot(criteriaQuery);
		if (root == null)
		{
			return;
		}
		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		final List<javax.persistence.criteria.Order> orderList = new ArrayList<javax.persistence.criteria.Order>();
		if (!criteriaQuery.getOrderList().isEmpty())
		{
			orderList.addAll(criteriaQuery.getOrderList());
		}
		for (final Order order : orders)
		{
			if (order.getDirection() == Direction.asc)
			{
				orderList.add(criteriaBuilder.asc(root.get(order.getProperty())));
			}
			else if (order.getDirection() == Direction.desc)
			{
				orderList.add(criteriaBuilder.desc(root.get(order.getProperty())));
			}
		}
		criteriaQuery.orderBy(orderList);
	}

	private void addOrders(final CriteriaQuery<T> criteriaQuery, final Pageable pageable)
	{
		if (criteriaQuery == null || pageable == null)
		{
			return;
		}
		final Root<T> root = getRoot(criteriaQuery);
		if (root == null)
		{
			return;
		}
		final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		final List<javax.persistence.criteria.Order> orderList = new ArrayList<javax.persistence.criteria.Order>();
		if (!criteriaQuery.getOrderList().isEmpty())
		{
			orderList.addAll(criteriaQuery.getOrderList());
		}
		if (StringUtils.isNotEmpty(pageable.getOrderProperty()) && pageable.getOrderDirection() != null)
		{
			if (pageable.getOrderDirection() == Direction.asc)
			{
				orderList.add(criteriaBuilder.asc(root.get(pageable.getOrderProperty())));
			}
			else if (pageable.getOrderDirection() == Direction.desc)
			{
				orderList.add(criteriaBuilder.desc(root.get(pageable.getOrderProperty())));
			}
		}
		if (pageable.getOrders() != null)
		{
			for (final Order order : pageable.getOrders())
			{
				if (order.getDirection() == Direction.asc)
				{
					orderList.add(criteriaBuilder.asc(root.get(order.getProperty())));
				}
				else if (order.getDirection() == Direction.desc)
				{
					orderList.add(criteriaBuilder.desc(root.get(order.getProperty())));
				}
			}
		}
		criteriaQuery.orderBy(orderList);
	}

}