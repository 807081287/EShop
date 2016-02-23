/*
 *
 *
 *
 */
package net.eshop.util;

import java.io.IOException;
import java.io.Writer;

import org.apache.log4j.Logger;
import org.springframework.util.Assert;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


/**
 * Utils - JSON
 *
 *
 *
 */
public final class JsonUtils
{
	private static Logger LOG = Logger.getLogger(JsonUtils.class);

	/** ObjectMapper */
	private static ObjectMapper mapper = new ObjectMapper();

	/**
	 * 不可实例化
	 */
	private JsonUtils()
	{
	}

	/**
	 * 将对象转换为JSON字符串
	 *
	 * @param value
	 *           对象
	 * @return JSOn字符串
	 */
	public static String toJson(final Object value)
	{
		try
		{
			return mapper.writeValueAsString(value);
		}
		catch (final Exception e)
		{
			LOG.error("Failed to Json!", e);
		}
		return null;
	}

	/**
	 * 将JSON字符串转换为对象
	 *
	 * @param json
	 *           JSON字符串
	 * @param valueType
	 *           对象类型
	 * @return 对象
	 */
	public static <T> T toObject(final String json, final Class<T> valueType)
	{
		Assert.hasText(json);
		Assert.notNull(valueType);
		try
		{
			return mapper.readValue(json, valueType);
		}
		catch (final Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 将JSON字符串转换为对象
	 *
	 * @param json
	 *           JSON字符串
	 * @param typeReference
	 *           对象类型
	 * @return 对象
	 */
	public static <T> T toObject(final String json, final TypeReference<?> typeReference)
	{
		Assert.hasText(json);
		Assert.notNull(typeReference);
		try
		{
			return mapper.readValue(json, typeReference);
		}
		catch (final Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 将JSON字符串转换为对象
	 *
	 * @param json
	 *           JSON字符串
	 * @param javaType
	 *           对象类型
	 * @return 对象
	 */
	public static <T> T toObject(final String json, final JavaType javaType)
	{
		Assert.hasText(json);
		Assert.notNull(javaType);
		try
		{
			return mapper.readValue(json, javaType);
		}
		catch (final Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 将对象转换为JSON流
	 *
	 * @param writer
	 *           writer
	 * @param value
	 *           对象
	 */
	public static void writeValue(final Writer writer, final Object value)
	{
		try
		{
			mapper.writeValue(writer, value);
		}
		catch (final JsonGenerationException e)
		{
			e.printStackTrace();
		}
		catch (final JsonMappingException e)
		{
			e.printStackTrace();
		}
		catch (final IOException e)
		{
			e.printStackTrace();
		}
	}

}