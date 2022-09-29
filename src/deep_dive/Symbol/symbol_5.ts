import { log } from "console";

const obj = {
  // 심볼 값으로 프로퍼티 키를 생성
  [Symbol.for("mySymbol")]: 1,
};

log(obj[Symbol.for("mySymbol")]); // 1

// 심볼 값으로 프로퍼티 키를 동적 생성하면 다른 프로퍼티 키와 절대 충돌하지 않아 안전하다.
// Array.prototype[Symbol.for('sums')] = function () {
//     return this.reduce((acc, cur) => acc + cur, 0)
// }

// [1,2][Symbol.for('sums')](); // 3
