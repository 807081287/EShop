/**
 *
 */
package net.eshop.webservice.response;

/**
 * @author joeli2
 *
 */
public class Error
{
	private String id;
	private String attribute;
	private String reason;

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
	 * @return the attribute
	 */
	public String getAttribute()
	{
		return attribute;
	}

	/**
	 * @param attribute
	 *           the attribute to set
	 */
	public void setAttribute(final String attribute)
	{
		this.attribute = attribute;
	}

	/**
	 * @return the reason
	 */
	public String getReason()
	{
		return reason;
	}

	/**
	 * @param reason
	 *           the reason to set
	 */
	public void setReason(final String reason)
	{
		this.reason = reason;
	}

}
