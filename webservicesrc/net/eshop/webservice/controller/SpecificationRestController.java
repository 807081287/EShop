/*
 *
 *
 *
 */
package net.eshop.webservice.controller;

import javax.annotation.Resource;

import net.eshop.controller.admin.BaseController;
import net.eshop.entity.Specification;
import net.eshop.util.JsonUtils;
import net.eshop.webservice.response.Response;
import net.eshop.webservice.services.SpecificationRestService;
import net.eshop.webservice.util.ResponseUtil;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


/**
 * Controller - 规格
 *
 */
@Controller
public class SpecificationRestController extends BaseController
{
	private static final Logger LOG = Logger.getLogger(SpecificationRestController.class);
	@Resource(name = "specificationRestServiceImpl")
	private SpecificationRestService specificationRestService;

	@RequestMapping(value = "/rest/specification/{code}", method = RequestMethod.GET)
	public ResponseEntity<Specification> getSpecification(@PathVariable("code") final String code)
	{
		final Specification specification = specificationRestService.findByCode(code);
		if (specification == null)
		{
			return new ResponseEntity<Specification>(HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<Specification>(specification, HttpStatus.OK);
	}

	/**
	 * 保存
	 */
	@RequestMapping(value = "/rest/specification", method = RequestMethod.POST)
	public ResponseEntity<Response> create(@RequestBody final String specificationStr)
	{
		LOG.info("Starting create specification...........");
		try
		{
			final Specification specification = JsonUtils.toObject(specificationStr, Specification.class);
			specificationRestService.save(specification);
		}
		catch (final Exception e)
		{
			LOG.error(e);
			final Response response = ResponseUtil.createErrorResponse(e);
			return new ResponseEntity<Response>(response, HttpStatus.EXPECTATION_FAILED);
		}
		return new ResponseEntity<Response>(ResponseUtil.createResponse(), HttpStatus.OK);
	}

	/**
	 * 保存
	 */
	@RequestMapping(value = "/rest/specification", method = RequestMethod.PUT)
	public ResponseEntity<Response> update(@RequestBody final String specificationStr)
	{
		LOG.info("Starting update specification...........");
		try
		{
			final Specification specification = JsonUtils.toObject(specificationStr, Specification.class);
			specificationRestService.updateOrCreate(specification);
		}
		catch (final Throwable ex)
		{
			LOG.error("Failed to update Specification", ex);
			return new ResponseEntity<Response>(ResponseUtil.createErrorResponse(ex), HttpStatus.EXPECTATION_FAILED);
		}
		return new ResponseEntity<Response>(ResponseUtil.createResponse(), HttpStatus.OK);
	}
}