/**
 *
 */
package net.eshop.encryption;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import org.apache.commons.codec.digest.DigestUtils;


/**
 * @author joeli2
 *
 */
public class ToolMain
{
	public static void main(final String[] args) throws Exception
	{
		//		printEncriptedPasswrod("nimda");
		printEncriptionString();
	}

	private static void printEncriptedPasswrod(final String password)
	{
		System.out.println(DigestUtils.md5Hex(password));

	}

	private static void printEncriptionString()
	{
		final String expireDate = "20500505";
		final String authorizationID = "35342D33322D43342D37462D39372D3134";//授权ID
		try
		{
			System.out.println("授权码:" + DESedeEncryption.encryptToHecString(authorizationID, expireDate));
		}
		catch (final InvalidKeyException e)
		{
			// YTODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (final NoSuchAlgorithmException e)
		{
			// YTODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (final NoSuchPaddingException e)
		{
			// YTODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (final IllegalBlockSizeException e)
		{
			// YTODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (final BadPaddingException e)
		{
			// YTODO Auto-generated catch block
			e.printStackTrace();
		}
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
}
