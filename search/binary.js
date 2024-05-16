/*
  ____  _                        
 | __ )(_)_ __   __ _ _ __ _   _ 
 |  _ \| | '_ \ / _` | '__| | | |
 | |_) | | | | | (_| | |  | |_| |
 |____/|_|_| |_|\__,_|_|   \__, |
                           |___/ 
*/

import { rnd, log, array } from "../arkit.js";
import { selectionSort } from "../sort/selection.js";
//import { array } from "../dummy.js";

const binarySearch = (array, target) => {
  let len = array.length;
  let mi = parseInt(len / 2);
  let mid = array[mi];

  if (target == mid) return 1;
  else if (len == 1) return -1;

  let subArr = target > mid ? array.slice(mi) : array.slice(0, mi);

  return binarySearch(subArr, target);
};

///

const arr = array;
selectionSort(arr);
log(arr);

for (let i = 10; i > 0; i--) {
  let n = arr[rnd(arr.length)];
  let idx = binarySearch(arr, n);

  log(
    n,
    idx > -1
      ? `Found at index: ${idx}`
      : idx == -1
      ? "Not found"
      : "Out of range"
  );
}
