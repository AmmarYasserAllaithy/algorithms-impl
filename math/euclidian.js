/*
  _____           _ _     _ _             
 | ____|   _  ___| (_) __| (_) __ _ _ __  
 |  _|| | | |/ __| | |/ _` | |/ _` | '_ \ 
 | |__| |_| | (__| | | (_| | | (_| | | | |
 |_____\__,_|\___|_|_|\__,_|_|\__,_|_| |_|

*/

import { rnd, log } from "../arkit.js";

const findGCD = (x, y) => {
  let mod = x % y;

  while (mod != 0) {
    x = y;
    y = mod;
    mod = x % y;
  }

  return y;
};

////

const run = (x, y) => {
  let gcd = findGCD(x, y);

  log(gcd, `${x} / ${y} ≈ ${parseInt(x / y)}  →  ${x % y}`);
};

run(1112, 695);
run(rnd(949476), rnd(54786));
run(rnd(1091997), rnd());
run(rnd(), rnd());
