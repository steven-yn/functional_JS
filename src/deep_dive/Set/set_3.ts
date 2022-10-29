const { size } = new Set([1, 2, 3, 3]);
console.log(size); // 3

const exampleSet = new Set([1, 2, 3]);
console.log(Object.getOwnPropertyDescriptor(Set.prototype, "size"));
// {
//   get: [Function: get size],
//   set: undefined,
//   enumerable: false,
//   configurable: true
// }

// exampleSet.size = 10; // Cannot assign to 'size' because it is a read-only property.
// console.log(exampleSet.size); // 3

const set_3 = new Set();
set_3.add(1);
console.log(set_3); // Set(1) { 1 }
set_3.add(2).add(3).add(4).add(4);
console.log(set_3); // Set(4) { 1, 2, 3, 4 }

const set_3_1 = new Set();
// console.log(NaN === NaN); // false
console.log(0 === -0); // true

set_3_1.add(NaN).add(NaN);
console.log(set_3_1); // Set(1) { NaN }

set_3_1.add(0).add(-0);
console.log(set_3_1); // Set(2) { NaN, 0 }

const set_3_2 = new Set();
set_3_2
  .add(1)
  .add("test")
  .add(true)
  .add(undefined)
  .add(null)
  .add({})
  .add([])
  .add(() => {});
console.log(set_3_2);
// Set(8) {
//   1,
//   'test',
//   true,
//   undefined,
//   null,
//   {},
//   [],
//   [Function (anonymous)]
// }
