
/**
 * Java version of ./primality_test.js
 */

import java.util.*;

public class FermatPrimalityTest {

	static final ArrayList<Integer> CARMICHAEL_NUMBERS = new ArrayList<>();
	
	static {
	  try {
  	  Collections.addAll(CARMICHAEL_NUMBERS, 561, 1105, 1729, 2465, 2821, 6601, 8911, 10585, 15841, 29341, 41041, 46657, 52633, 62745, 63973);

	  } catch (Exception e) {
	    log(e.toString());
	  }
	}
	
	
	boolean isCarmichael(int n) {
	  for (int cn : CARMICHAEL_NUMBERS) if (cn == n) return true;
		return false;
	}
	
	/// Fermat's little theorem n^p mod p = n
	boolean isSatisfyingTheorem(int n, int p) {
			long pow = (long) Math.pow(n, p);
			int mod = (int) (pow % p);
			boolean s = mod == n;
			log(String.format("%d ^ %d = %d mod %d = %d \u2192 %s", n, p, pow, p, mod, s));
			return s;
		}
	
	boolean isProbablePrime(int num) {
		if (isCarmichael(num)) return false;
	
		int cases = num < 10 ? num : 10;
	
		for (int i = 0; i < cases; i++)
		  if (!isSatisfyingTheorem(rnd(num), num)) return false;
		
		return true;
	}
	
	void fermatPrimalityTest(int num) {
		log(String.format("%n %d is %s%n", num, isProbablePrime(num) ? "probable prime \u2713" : "composite"));
	}
	
	void fermatPrimalityTests(int... nums) {
		for (int num : nums) fermatPrimalityTest(num);
	}
	
	public static void main(String[] args) {
		FermatPrimalityTest fpt = new FermatPrimalityTest();
		
		fpt.fermatPrimalityTests(1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 33, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 77, 79);
		fpt.fermatPrimalityTests(113, 561, 51346, 6461649, 646194);
	}
	
	static void log(Object... arr) {
		for (Object item : arr)
		  System.out.println(item.toString());
	}
	
	int rnd(int max) {
		return (int) Math.floor(Math.random() * max);
	}
}