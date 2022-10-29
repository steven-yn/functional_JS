const set_1_0 = new Set();
console.log(set_1_0); // Set(0) {}

const set_1_1 = new Set([1, 2, 3, 3]);
console.log(set_1_1); // Set(3) { 1, 2, 3 }

const set_1_2 = new Set("hello");
console.log(set_1_2); // Set(4) { 'h', 'e', 'l', 'o' }
