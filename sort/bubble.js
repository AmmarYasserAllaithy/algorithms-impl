/*
  ____        _     _     _
 | __ ) _   _| |__ | |__ | | ___
 |  _ \| | | | '_ \| '_ \| |/ _ \
 | |_) | |_| | |_) | |_) | |  __/
 |____/ \__,_|_.__/|_.__/|_|\___|

*/

import { isSortedDesc, swap, run } from "../arkit.js";

/// Bubble sort Algorithm
const bubbleSort = (arr) => {
  let len = arr.length;

  // Loop through the entire Array
  for (let mi = 0; mi < len; mi++)
    // Loop through the sub array inversely
    // from the rightmost number
    // to the last sorted number in the left.
    for (let i = len - 2, j; i >= mi; i--)
      // Compare
      if (isSortedDesc(arr[i - 1], arr[i]))
        // Swap two values
        swap(arr, i, i - 1);
};

run(bubbleSort);
