const set_5_0 = new Set([1, 2, 3]);
set_5_0.forEach((v, v2, set) => console.log(v, v2, set));
// 1 1 Set(3) { 1, 2, 3 }
// 2 2 Set(3) { 1, 2, 3 }
// 3 3 Set(3) { 1, 2, 3 }

const set_5_1 = new Set([1, 2, 3, 4]);
console.log(Symbol.iterator in set_5_1); // true

for (const value of set_5_1) {
  console.log(value); // 1 2 3 4
}

console.log([...set_5_1]); // [ 1, 2, 3, 4 ]

const [set_5_1Value, ...set_5_1Rest] = set_5_1;
console.log(set_5_1Value, set_5_1Rest); // 1 [ 2, 3, 4 ]
