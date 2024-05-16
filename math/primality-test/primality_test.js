/*
  _____                         _   
 |  ___|__ _ __ _ __ ___   __ _| |_ 
 | |_ / _ \ '__| '_ ` _ \ / _` | __|
 |  _|  __/ |  | | | | | | (_| | |_ 
 |_|  \___|_|  |_| |_| |_|\__,_|\__|

  ____       _                 _ _ _         
 |  _ \ _ __(_)_ __ ___   __ _| (_) |_ _   _ 
 | |_) | '__| | '_ ` _ \ / _` | | | __| | | |
 |  __/| |  | | | | | | | (_| | | | |_| |_| |
 |_|   |_|  |_|_| |_| |_|\__,_|_|_|\__|\__, |
                                       |___/ 
*/

import { rnd, log } from "../arkit.js";

/**
 * All prime numbers are satisfying the Fermat Primality Test.
 * But NOT all numbers satisfying it are prime numbers.
 *
 * Carmichael number: is the composite number that satisfies the Fermat Primality Test.
 *
 */

const CARMICHAEL_NUMBERS = [
  561, 1105, 1729, 2465, 2821, 6601, 8911, 10585, 15841, 29341, 41041, 46657,
  52633, 62745, 63973,
];

/// Fermat's little theorem n^p mod p = n
const isSatisfyingTheorem = (n, p) => {
  let pow = Math.pow(n, p);
  let mod = pow % p;
  let s = mod == n;

  log(` → ${n} ^ ${p} = ${pow} % ${p} = ${mod} → ${s}`);

  return s;
};

const isProbablePrime = (num) => {
  if (CARMICHAEL_NUMBERS.includes(num)) return false;

  let cases = num < 10 ? num : 10;
  for (let _ = 0; _ < cases; _++)
    if (!isSatisfyingTheorem(rnd(num), num)) return false;

  return true;
};

const fermatPrimalityTest = (num) =>
  log(`${num} is ${isProbablePrime(num) ? "probable prime ✓" : "composite"}\n`);

///

const fermatPrimalityTests = (...nums) => nums.forEach(fermatPrimalityTest);

fermatPrimalityTest(561);
fermatPrimalityTest(113);
let primes = [
  1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 33, 37, 41, 43, 47, 53, 59, 61, 67,
  71, 73, 77, 79,
];
fermatPrimalityTests(...primes);
fermatPrimalityTests(51346, 461649, 646194);
