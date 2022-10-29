// const infiniteFibonacci = (function () {
//   let [pre, cur] = [0, 1];

//   return {
//     [Symbol.iterator]() {
//       return this;
//     },
//     next() {
//       [pre, cur] = [cur, pre + cur];

//       // 무한 이터러블 이므로 done 프로퍼티를 생략
//       return { value: cur };
//     },
//   };
// })();

// // infiniteFibonacci 이 함수는 무한 이터러블 이다.

// for (const num of infiniteFibonacci) {
//   if (num > 10000) break;

//   console.log(num); // 1 2 3 5 8 ..... 2584 4181 6765
// }

const infiniteFibonacci = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

// // infiniteFibonacci 이 함수는 무한 이터러블 이다.

for (const num of infiniteFibonacci) {
  if (num > 10000) break;

  console.log(num); // 1 2 3 5 8 ..... 2584 4181 6765
}
