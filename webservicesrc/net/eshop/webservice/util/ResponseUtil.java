/**
 *
 */
package net.eshop.webservice.util;

import java.util.ArrayList;
import java.util.List;

import net.eshop.webservice.response.Response;

import org.springframework.util.CollectionUtils;


public class ResponseUtil
{
	public static byte STATUS_SUCCESS = 0;
	public static byte STATUS_ERROR = 1;
	public static byte STATUS_ABORT = 2;

	private static String[] STATUS_MESSAGES =
	{ "success", "error", "aborted" };

	public static Response createResponse()
	{
		final Response response = new Response();
		response.setStatus(STATUS_SUCCESS);
		response.setMessage(STATUS_MESSAGES[STATUS_SUCCESS]);
		return response;
	}

	public static void createError(final Response response, final String id, final String attributeName, final String reason)
	{
		List<net.eshop.webservice.response.Error> errors = response.getErrors();
		if (CollectionUtils.isEmpty(errors))
		{
			errors = new ArrayList<net.eshop.webservice.response.Error>();
			response.setErrors(errors);
		}

		final net.eshop.webservice.response.Error error = new net.eshop.webservice.response.Error();
		error.setId(id);
		error.setAttribute(attributeName);
		error.setReason(reason);
		errors.add(error);

		if (response.getStatus() != STATUS_ERROR)
		{
			response.setStatus(STATUS_ERROR);
			response.setMessage(STATUS_MESSAGES[STATUS_ERROR]);
		}
	}

	public static Response createErrorResponse(final String errorMsg)
	{
		final Response response = new Response();
		response.setMessage(STATUS_MESSAGES[STATUS_ERROR]);
		response.setStatus(STATUS_ERROR);
		response.setErrorMsg(errorMsg);

		return response;
	}

	public static Response createErrorResponse(final Exception ex)
	{
		final Response response = new Response();
		response.setMessage(STATUS_MESSAGES[STATUS_ABORT]);
		response.setStatus(STATUS_ABORT);
		response.setErrorMsg(ex.getMessage());

		return response;
	}
}
