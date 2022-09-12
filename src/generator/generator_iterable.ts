console.log(...odds(10)); // 1 3 5 7 9
console.log([...odds(10), ...odds(20)]); // [1, 3, 5, 7, 9, 1, 3, 5, 7 ,9 ,11, 13, 15, 17, 19]

const [head, ...tail] = odds(5);
console.log(head); // 1
console.log(tail); // [3, 5]

const [a, b, ...rest] = odds(10);
console.log(a); // 1
console.log(b); // 3
console.log(rest); // [5, 7, 9]
