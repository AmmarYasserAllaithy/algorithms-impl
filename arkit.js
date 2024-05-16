///
/// Log varargs to console
///
export const log = (...o) => o.forEach((_) => console.log(_));

///
/// Check Descending sorting
///
export const isSortedDesc = (x, y) => x > y;

///
/// Swap array values by indices
///
export const swap = (arr, i, j) => {
  let x = arr[i];

  arr[i] = arr[j];
  arr[j] = x;
};

///
/// Generate random number
///
export const rnd = (max = 1000) => parseInt(Math.random() * max);

///
///
///

export let array = [];
for (let x = 0; x < 69; x++) array.push(rnd());

// import { array } from "./dummy.js";

///
/// Run sorting algorithm by dummy data
///
export const run = (sortingAlgorithm) => {
  log("Original:", array);

  let start = Date.now();
  sortingAlgorithm(array);
  let millis = Date.now() - start;

  log("Sorted:", array);
  log(`Consumed: ${millis} ms`);
};
