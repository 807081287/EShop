package net.eshop.entity.interceptor;

import org.apache.log4j.Logger;
import org.hibernate.EmptyInterceptor;
import org.springframework.stereotype.Component;


/**
 * Hiberate
 *
 * @author 张代浩
 */
@Component
public class HiberAspect extends EmptyInterceptor
{
	/**
	 *
	 */
	private static final long serialVersionUID = 6271639917016171546L;
	private static final Logger logger = Logger.getLogger(HiberAspect.class);


}
