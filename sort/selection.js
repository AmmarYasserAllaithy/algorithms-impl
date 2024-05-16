/*
  ____       _           _   _
 / ___|  ___| | ___  ___| |_(_) ___  _ __
 \___ \ / _ \ |/ _ \/ __| __| |/ _ \| '_ \
  ___) |  __/ |  __/ (__| |_| | (_) | | | |
 |____/ \___|_|\___|\___|\__|_|\___/|_| |_|

*/

import { isSortedDesc, swap, run } from "../arkit.js";

let leftmostIdx = 0;

/// Find minimum
const idxOfMinNum = (arr) => {
  let idx = leftmostIdx;

  for (let i = idx + 1; i < arr.length; i++)
    if (isSortedDesc(arr[idx], arr[i])) idx = i;

  return idx;
};

/// Swap with leftmost
const swapWithLeftmost = (arr, i) => swap(arr, i, leftmostIdx++);

/// Selection sort algorithm
export const selectionSort = (arr) => {
  let len = arr.length;

  while (len-- > 0) {
    let idx = idxOfMinNum(arr, leftmostIdx);
    
    swapWithLeftmost(arr, idx);
  }
};

//run(selectionSort);
