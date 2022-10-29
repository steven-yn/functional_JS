const unique = (array: number[]) =>
  array.filter((v, i, self) => self.indexOf(v) === i);
console.log(unique([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

const uniqueSet = (array: number[]) => [...new Set(array)];
console.log(uniqueSet([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
