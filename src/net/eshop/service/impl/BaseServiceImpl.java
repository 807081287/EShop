/*
 *
 *
 *
 */
package net.eshop.service.impl;

import java.beans.PropertyDescriptor;
import java.io.Serializable;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import net.eshop.Filter;
import net.eshop.Order;
import net.eshop.Page;
import net.eshop.Pageable;
import net.eshop.dao.BaseDao;
import net.eshop.entity.BaseEntity;
import net.eshop.service.BaseService;

import org.apache.commons.lang.ArrayUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeansException;
import org.springframework.beans.FatalBeanException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;


/**
 * Service - 基类
 *
 *
 *
 */
@Transactional
public class BaseServiceImpl<T, ID extends Serializable> implements BaseService<T, ID>
{

	/** 更新忽略属性 */
	private static final String[] UPDATE_IGNORE_PROPERTIES = new String[]
	{ BaseEntity.ID_PROPERTY_NAME, BaseEntity.CREATE_DATE_PROPERTY_NAME, BaseEntity.MODIFY_DATE_PROPERTY_NAME };

	/** baseDao */
	private BaseDao<T, ID> baseDao;

	public void setBaseDao(final BaseDao<T, ID> baseDao)
	{
		this.baseDao = baseDao;
	}

	@Transactional(readOnly = true)
	public T find(final ID id)
	{
		return baseDao.find(id);
	}

	@Transactional(readOnly = true)
	public T findByCode(final String code)
	{
		return baseDao.findByCode(code);
	}

	@Transactional(readOnly = true)
	public List<T> findAll()
	{
		return findList(null, null, null, null);
	}

	@Transactional(readOnly = true)
	public List<T> findList(final ID... ids)
	{
		final List<T> result = new ArrayList<T>();
		if (ids != null)
		{
			for (final ID id : ids)
			{
				final T entity = find(id);
				if (entity != null)
				{
					result.add(entity);
				}
			}
		}
		return result;
	}

	@Transactional(readOnly = true)
	public List<T> findList(final Integer count, final List<Filter> filters, final List<Order> orders)
	{
		return findList(null, count, filters, orders);
	}

	@Transactional(readOnly = true)
	public List<T> findList(final Integer first, final Integer count, final List<Filter> filters, final List<Order> orders)
	{
		return baseDao.findList(first, count, filters, orders);
	}

	@Transactional(readOnly = true)
	public Page<T> findPage(final Pageable pageable)
	{
		return baseDao.findPage(pageable);
	}

	@Transactional(readOnly = true)
	public long count()
	{
		return count(new Filter[] {});
	}

	@Transactional(readOnly = true)
	public long count(final Filter... filters)
	{
		return baseDao.count(filters);
	}

	@Transactional(readOnly = true)
	public boolean exists(final ID id)
	{
		return baseDao.find(id) != null;
	}

	@Transactional(readOnly = true)
	public boolean exists(final Filter... filters)
	{
		return baseDao.count(filters) > 0;
	}

	@Transactional
	public void save(final T entity)
	{
		baseDao.persist(entity);
	}

	@Transactional
	public T update(final T entity)
	{
		return baseDao.merge(entity);
	}

	@Transactional
	public T update(final T entity, final String... ignoreProperties)
	{
		Assert.notNull(entity);
		if (baseDao.isManaged(entity))
		{
			throw new IllegalArgumentException("Entity must not be managed");
		}
		final T persistant = baseDao.find(baseDao.getIdentifier(entity));
		if (persistant != null)
		{
			copyProperties(entity, persistant, (String[]) ArrayUtils.addAll(ignoreProperties, UPDATE_IGNORE_PROPERTIES));
			return update(persistant);
		}
		else
		{
			return update(entity);
		}
	}

	@Transactional
	public void delete(final ID id)
	{
		delete(baseDao.find(id));
	}

	@Transactional
	public void delete(final ID... ids)
	{
		if (ids != null)
		{
			for (final ID id : ids)
			{
				delete(baseDao.find(id));
			}
		}
	}

	@Transactional
	public void delete(final T entity)
	{
		baseDao.remove(entity);
	}

	@SuppressWarnings(
	{ "unchecked", "rawtypes" })
	private void copyProperties(final Object source, final Object target, final String[] ignoreProperties) throws BeansException
	{
		Assert.notNull(source, "Source must not be null");
		Assert.notNull(target, "Target must not be null");

		final PropertyDescriptor[] targetPds = BeanUtils.getPropertyDescriptors(target.getClass());
		final List<String> ignoreList = (ignoreProperties != null) ? Arrays.asList(ignoreProperties) : null;
		for (final PropertyDescriptor targetPd : targetPds)
		{
			if (targetPd.getWriteMethod() != null && (ignoreProperties == null || (!ignoreList.contains(targetPd.getName()))))
			{
				final PropertyDescriptor sourcePd = BeanUtils.getPropertyDescriptor(source.getClass(), targetPd.getName());
				if (sourcePd != null && sourcePd.getReadMethod() != null)
				{
					try
					{
						final Method readMethod = sourcePd.getReadMethod();
						if (!Modifier.isPublic(readMethod.getDeclaringClass().getModifiers()))
						{
							readMethod.setAccessible(true);
						}
						final Object sourceValue = readMethod.invoke(source);
						final Object targetValue = readMethod.invoke(target);
						if (sourceValue != null && targetValue != null && targetValue instanceof Collection)
						{
							final Collection collection = (Collection) targetValue;
							collection.clear();
							collection.addAll((Collection) sourceValue);
						}
						else
						{
							final Method writeMethod = targetPd.getWriteMethod();
							if (!Modifier.isPublic(writeMethod.getDeclaringClass().getModifiers()))
							{
								writeMethod.setAccessible(true);
							}
							writeMethod.invoke(target, sourceValue);
						}
					}
					catch (final Throwable ex)
					{
						throw new FatalBeanException("Could not copy properties from source to target", ex);
					}
				}
			}
		}
	}

}