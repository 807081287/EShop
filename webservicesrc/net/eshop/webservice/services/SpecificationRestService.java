/**
 *
 */
package net.eshop.webservice.services;

import net.eshop.entity.Specification;
import net.eshop.service.BaseService;


/**
 * @author joeli2
 *
 */
public interface SpecificationRestService extends BaseService<Specification, Long>
{
	void updateOrCreate(Specification specification) throws Throwable;
}
