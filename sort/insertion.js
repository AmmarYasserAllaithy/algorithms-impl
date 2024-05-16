/*
  ___                     _   _
 |_ _|_ __  ___  ___ _ __| |_(_) ___  _ __
  | || '_ \/ __|/ _ \ '__| __| |/ _ \| '_ \
  | || | | \__ \  __/ |  | |_| | (_) | | | |
 |___|_| |_|___/\___|_|   \__|_|\___/|_| |_|
 
*/

import { isSortedDesc, swap, run } from "../arkit.js";

const insertionSort = (arr) => {
  // Loop through the entire array
  for (let i = 1; i < arr.length; i++)
    // Loop through the sub array [0, i]
    for (let x = i; x > 0; x--)
      // Check sorting state
      if (isSortedDesc(arr[x - 1], arr[x]))
        // Swap two values
        swap(arr, x, x - 1);
};

run(insertionSort);

///

/*
let start = 1;

const insertionSortByRecursion = (arr) => {
  for (let i = start; i < arr.length; i++) {
    if (isSortedDesc(arr[i - 1], arr[i])) {
      swap(arr, i, i - 1);

      if (i == 1) continue;

      start = i;

      insertionSortByRecursion(arr);
    }
  }
};

run(insertionSortByRecursion);
*/

// [2, 377, 38, 1, 0, 3, 82, 8, 28]
// [2, 38, 377, 1, 0, 3, 82, 8, 28]
// [2, 38, 1, 377, 0, 3, 82, 8, 28]
// [2, 1, 38, 377, 0, 3, 82, 8, 28]
// [1, 2, 38, 377, 0, 3, 82, 8, 28]
// [1, 2, 38, 0, 377, 3, 82, 8, 28]
// [1, 2, 0, 38, 377, 3, 82, 8, 28]
// [1, 0, 2, 38, 377, 3, 82, 8, 28]
// [0, 1, 2, 38, 377, 3, 82, 8, 28]
