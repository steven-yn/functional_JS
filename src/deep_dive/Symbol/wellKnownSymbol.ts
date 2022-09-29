import { log } from "console";

// 1 ~ 5 범위를 가진 이터러블
const iterable_1 = {
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;

    return {
      next() {
        return { value: cur++, done: cur > max + 1 };
      },
    };
  },
};

for (const num of iterable_1) {
  log(num); // 1 2 3 4 5
}
