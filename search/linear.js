/*
  _     _                       
 | |   (_)_ __   ___  __ _ _ __ 
 | |   | | '_ \ / _ \/ _` | '__|
 | |___| | | | |  __/ (_| | |   
 |_____|_|_| |_|\___|\__,_|_|   

*/

import { rnd, log } from "../arkit.js";
import { array } from "../dummy.js";

const linearSearch = (array, target) => {
  for (let i in array) if (array[i] == target) return i;

  return -1;
};

///

for (let i = 10; i > 0; i--) {
  let n = arr[rnd(arr.length)];
  let idx = linearSearch(array, n);

  log(n, idx > -1 ? `Found at index: ${idx}` : "Not found");
}
