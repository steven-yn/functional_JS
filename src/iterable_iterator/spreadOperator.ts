let a3 = [1, 2];
const arr = [1, 2, 3];
const set = new Set([1, 2, 3]);
const mapObj = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// console.log(...a3); // 1 2
// console.log([...a3, ...[3, 4]]); // [1, 2, 3, 4]
// console.log([...a3, ...arr, ...set, ...mapObj.keys()]); // [1, 2, 1, 2, 3, 1, 2, 3, 'a', 'b', 'c']
