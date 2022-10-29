const set_4 = new Set([1, 2, 3]);

console.log(set_4.has(2)); // true
console.log(set_4.has(4)); // false

const set_4_1 = new Set([1, 2, 3]);

set_4_1.delete(2);
console.log(set_4_1); // Set(2) { 1, 3 }

set_4_1.delete(1);
console.log(set_4_1); // Set(1) { 3 }

const set_4_2 = new Set([1, 2, 3, 4, 5]);
set_4_2.clear();
console.log(set_4_2); // Set(0) {}
