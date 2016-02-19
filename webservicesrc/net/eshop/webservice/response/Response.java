/**
 *
 */
package net.eshop.webservice.response;

import java.util.List;


/**
 * @author joeli2
 *
 */
public class Response
{
	private String id;
	private List<net.eshop.webservice.response.Error> errors;
	private byte status;
	private String message;
	private String errorMsg;

	/**
	 * @return the ErrorMsg
	 */
	public String getErrorMsg()
	{
		return errorMsg;
	}

	/**
	 * @param ErrorMsg
	 *           the ErrorMsg to set
	 */
	public void setErrorMsg(final String errorMsg)
	{
		this.errorMsg = errorMsg;
	}

	/**
	 * @return the id
	 */
	public String getId()
	{
		return id;
	}

	/**
	 * @param id
	 *           the id to set
	 */
	public void setId(final String id)
	{
		this.id = id;
	}


	/**
	 * @return the errors
	 */
	public List<net.eshop.webservice.response.Error> getErrors()
	{
		return errors;
	}

	/**
	 * @param errors
	 *           the errors to set
	 */
	public void setErrors(final List<net.eshop.webservice.response.Error> errors)
	{
		this.errors = errors;
	}

	/**
	 * @return the status
	 */
	public byte getStatus()
	{
		return status;
	}

	/**
	 * @param status
	 *           the status to set
	 */
	public void setStatus(final byte status)
	{
		this.status = status;
	}

	/**
	 * @return the message
	 */
	public String getMessage()
	{
		return message;
	}

	/**
	 * @param message
	 *           the message to set
	 */
	public void setMessage(final String message)
	{
		this.message = message;
	}


}
