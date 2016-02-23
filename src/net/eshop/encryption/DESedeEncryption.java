package net.eshop.encryption;

import java.math.BigInteger;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.Security;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.apache.log4j.Logger;


public class DESedeEncryption
{
	public static final SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
	private static Logger LOG = Logger.getLogger(DESedeEncryption.class);
	private static final String Algorithm = "DESede"; // 定义 加密算法,可用
	// DES,DESede,Blowfish

	// keybyte为加密密钥，长度为24字节
	static final byte[] keyBytes =
	{ 0x11, 0x22, 0x4F, 0x58,

	(byte) 0x88, 0x10, 0x40, 0x38, 0x28, 0x25, 0x79, 0x51,

	(byte) 0xCB, (byte) 0xDD, 0x55, 0x66, 0x77, 0x29, 0x74,

	(byte) 0x98, 0x30, 0x40, 0x36, (byte) 0xE2

	}; // 24字节的密钥

	// src为被加密的数据缓冲区（源）

	private static byte[] encryptMode(final byte[] src) throws NoSuchAlgorithmException, NoSuchPaddingException,
			IllegalBlockSizeException, BadPaddingException, InvalidKeyException
	{
		final com.sun.crypto.provider.SunJCE sunJCE = new com.sun.crypto.provider.SunJCE();
		Security.addProvider(sunJCE);
		// 生成密钥
		final SecretKey deskey = new SecretKeySpec(keyBytes, Algorithm);
		// 加密
		final Cipher c1 = Cipher.getInstance(Algorithm);
		c1.init(Cipher.ENCRYPT_MODE, deskey);
		return c1.doFinal(src);
	}

	/**
	 * 先将十六进制的MAC地址转换成byte[] 然后加密。
	 *
	 * @param hecMAC
	 *           十六进制的MAC地址
	 * @return 加密后转成十六进制
	 * @throws BadPaddingException
	 * @throws IllegalBlockSizeException
	 * @throws NoSuchPaddingException
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeyException
	 */
	public static String encryptToHecString(final String hecMAC) throws InvalidKeyException, NoSuchAlgorithmException,
			NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException
	{
		final byte[] macBytes = new BigInteger(hecMAC, 16).toByteArray();
		//		System.out.println("encryptToHecString MAC Address:" + new String(macBytes));
		return byte2hex(encryptMode(macBytes));
	}


	// keybyte为加密密钥，长度为24字节
	// src为加密后的缓冲区

	private static byte[] decryptMode(final byte[] src) throws NoSuchAlgorithmException, NoSuchPaddingException,
			InvalidKeyException, IllegalBlockSizeException, BadPaddingException
	{
		Security.addProvider(new com.sun.crypto.provider.SunJCE());
		// 生成密钥
		final SecretKey deskey = new SecretKeySpec(keyBytes, Algorithm);
		// 解密
		final Cipher c1 = Cipher.getInstance(Algorithm);
		c1.init(Cipher.DECRYPT_MODE, deskey);
		return c1.doFinal(src);
	}

	/**
	 * 利用 keyBytes 作为秘钥解密十六进制串 to 原始明文字符串
	 *
	 * @param encryptedHecString
	 * @param keyBytes
	 * @return 解密后的明文
	 * @throws BadPaddingException
	 * @throws IllegalBlockSizeException
	 * @throws NoSuchPaddingException
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeyException
	 */
	public static String decryptHecString(final String encryptedHecString) throws InvalidKeyException, NoSuchAlgorithmException,
			NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException
	{
		final byte[] macBytes = new BigInteger(encryptedHecString, 16).toByteArray();
		final byte[] srcBytes = decryptMode(macBytes);
		return new String(srcBytes);
	}


	private static String hex2Str(final String hecString)
	{
		final byte[] macBytes = new BigInteger(hecString, 16).toByteArray();
		return new String(macBytes);
	}


	/**
	 * 字节组转换成十六进制串
	 *
	 * @param b
	 * @return 十六进制串
	 */
	private static String byte2hex(final byte[] b)
	{
		String hs = "";
		String stmp = "";
		for (int n = 0; n < b.length; n++)
		{
			stmp = (java.lang.Integer.toHexString(b[n] & 0XFF));
			if (stmp.length() == 1)
			{
				hs = hs + "0" + stmp;
			}
			else
			{
				hs = hs + stmp;
			}
		}
		return hs.toUpperCase();
	}


	/**
	 * 转换成十六进制数。
	 *
	 * @param source
	 * @return
	 */
	public static String hec(final String source)
	{
		try
		{
			return byte2hex(source.getBytes());
		}
		catch (final Exception e)
		{
			LOG.error("转换成十六进制数失败", e);
			return null;
		}
	}

	/**
	 * 转换成十六进制数。
	 *
	 * @return 十六进制串
	 * @throws Exception
	 */
	public static String hecMAC()
	{
		try
		{
			String MAC = MACTool.getMAC();
			if (MAC == null)
			{
				MAC = "00-FF-22-F3-11-31";
			}
			return byte2hex(MAC.getBytes());
		}
		catch (final Exception e)
		{
			LOG.error("MAC地址转换成十六进制数失败", e);
			return "获取授权ID失败";
		}
	}

	public static void main(final String[] args) throws Exception
	{
		final String expireDate = "20500505";
		final String authorizationID = "35342D33322D43342D37462D39372D3134";//授权ID
		System.out.println("加密码:" + encryptToHecString(authorizationID, expireDate));
		//		final String rawString = expireDate + MACTool.getMAC();
		//		System.out.println("明文 MAC地址:" + MACTool.getMAC());
		//		System.out.println("明文 过期时间+MAC地址:" + rawString);
		//		System.out.println("十六进制 过期时间+MAC地址:" + hec(rawString));
		//		System.out.println("解析十六进制过期时间+MAC地址:" + hex2Str(hec(rawString)));
		//		final String encyptedHecMAC = encryptToHecString(hec(rawString));
		//		System.out.println("加密后的十六进制 过期时间+MAC地址:" + encyptedHecMAC);
		//		System.out.println("解密后的 过期时间+MAC地址:" + decryptHecString(encyptedHecMAC));
		//		System.out.println("解密后的 MAC地址:" + getRawMAC(encyptedHecMAC));
	}

	/**
	 * 此方法来获取加密码。获取后传给用户，填入页面即可。
	 *
	 * @param hecMAC
	 *           十六进制MAC地址 这里对应页面的
	 * @param expireDateStr
	 *           过期时间格式：20180129
	 * @return
	 * @throws BadPaddingException
	 * @throws IllegalBlockSizeException
	 * @throws NoSuchPaddingException
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeyException
	 */
	public static String encryptToHecString(final String hecMAC, final String expireDateStr) throws InvalidKeyException,
			NoSuchAlgorithmException, NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException
	{
		final String MAC = hex2Str(hecMAC); //获取服务器端的MAC 地址
		return encryptToHecString(hec(expireDateStr + MAC));
	}

	/**
	 * Verify if it match with the MAC Address
	 *
	 * @param encryptedHex
	 */
	public static boolean isExpired(final String encryptedHex)
	{


		String MAC;
		try
		{
			MAC = MACTool.getMAC();
			if (MAC == null)
			{
				MAC = "00-FF-22-F3-11-31";
			}
			final String raw = decryptHecString(encryptedHex);
			final String mac = raw.substring(8);//获取MAC地址
			final String dateStr = raw.substring(0, 8);//获取过期时间字符串

			final Date expireDate = formatter.parse(dateStr);//获取过期时间
			LOG.info("过期时间:" + dateStr);
			if (MAC.equals(mac) && expireDate.after(new Date()))
			{
				return true;
			}
		}
		catch (final Exception e)
		{
			LOG.error("授权失败", e);
		}
		return false;


	}

	private static String getRawMAC(final String encryptedHex) throws InvalidKeyException, NoSuchAlgorithmException,
			NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException
	{
		final String raw = decryptHecString(encryptedHex);
		final String mac = raw.substring(8);
		return mac;
	}
}