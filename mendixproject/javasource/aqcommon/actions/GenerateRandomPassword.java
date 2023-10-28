// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package aqcommon.actions;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Date;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;

/**
 * Generate a random string between 15-20 characters that meets most security standards for randomness,
 */
public class GenerateRandomPassword extends CustomJavaAction<java.lang.String>
{
	public GenerateRandomPassword(IContext context)
	{
		super(context);
	}

	@java.lang.Override
	public java.lang.String executeAction() throws Exception
	{
		// BEGIN USER CODE
		return generatePswd(15, 20, 4, 4, 4);
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "GenerateRandomPassword";
	}

	// BEGIN EXTRA CODE
	
	private static final char[] ALPHA_CAPS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();
	private static final char[] ALPHA_LOWER = "abcdefghijklmnopqrstuvwxyz".toCharArray();
	private static final char[] NUM = "0123456789".toCharArray();
	private static final char[] SPL_CHARS = "!@#$%^&*_=+-/".toCharArray();

	private static final SecureRandom secureRandom;
	static {
		try {
			secureRandom = SecureRandom.getInstance("SHA1PRNG");
		} catch (NoSuchAlgorithmException e) {
			throw new IllegalArgumentException("Invalid Random Method");
		}
	}

	public static String generatePswd(int minLen, int maxLen, int noOfCAPSAlpha, int noOfDigits, int noOfSplChars) {
		if (minLen > maxLen)
			throw new IllegalArgumentException("Min. Length > Max. Length!");
		if ((noOfCAPSAlpha + noOfDigits + noOfSplChars) > minLen)
			throw new IllegalArgumentException(
					"Min. Length should be atleast sum of (CAPS, DIGITS, SPL CHARS) Length!");

		secureRandom.setSeed((new Date()).getTime());
		int len = secureRandom.nextInt(maxLen - minLen + 1) + minLen;

		StringBuilder newPassword = new StringBuilder();
		newPassword.append( getRandomString(noOfCAPSAlpha, ALPHA_CAPS) );
		newPassword.append( getRandomString(noOfDigits, NUM) );
		newPassword.append( getRandomString(noOfSplChars, SPL_CHARS) );
		newPassword.append( getRandomString((len - noOfCAPSAlpha - noOfDigits - noOfSplChars), ALPHA_LOWER) );

		return newPassword.toString();
	}

	/**
	 * Generate Random String, Source copied from ESAPI library
	 * 
	 * @param length
	 * @param characterSet
	 * @return randomString
	 */
	public static StringBuilder getRandomString(int length, char[] characterSet) {
		StringBuilder randomString = new StringBuilder(length);
		for (int loop = 0; loop < length; loop++) {
			int index = secureRandom.nextInt(characterSet.length);
			randomString.append(characterSet[index]);
		}
		
		return randomString;
	}
	// END EXTRA CODE
}