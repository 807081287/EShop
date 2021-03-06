/*
 * 
 * 
 * 
 */
package net.eshop.service;

import java.util.List;

import net.eshop.entity.Area;

/**
 * Service - 地区
 * 
 * 
 * 
 */
public interface AreaService extends BaseService<Area, Long> {

	/**
	 * 查找顶级地区
	 * 
	 * @return 顶级地区
	 */
	List<Area> findRoots();

	/**
	 * 查找顶级地区
	 * 
	 * @param count
	 *            数量
	 * @return 顶级地区
	 */
	List<Area> findRoots(Integer count);

}