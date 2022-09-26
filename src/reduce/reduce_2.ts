// reduce 같은 경우 보조함수를 통해 어떻게 축약할지 완전히 위임하기 때문에,
// 단순한 number[] 외에도 복잡한 데이터형태도, 특정한 하나의 축약을 하기위해 어려움이 없다.

import { log } from "console";

// 예를 들어 아래 데이터안에 있는 모든 금액들을 더하는 코드를 reduce 만을 통해 작성해보자.
const products4 = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

export function reduce_4() {
  log("reduce 4");

  const reduce = (
    fn: (result: any, data: any) => any,
    acc: number | Iterable<any>,
    iter?: Iterable<any> | Iterator<any>
  ) => {
    if (!iter) {
      acc = acc as Iterable<any>;
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }

    for (const a of iter as Iterable<any>) {
      acc = fn(acc, a);
    }

    return acc;
  };

  // 더할 보조함수의 인자로 계속 더해질 값과 product의 price를 더해준다.
  // 시작값을 0
  // 입력할 데이터는 products
  log(
    reduce((total_price, product) => total_price + product.price, 0, products4)
  ); // 105000

  // 우리가 만든 reduce 의 경우에도 역시 보조함수를 통해 안쪽에 있는 값의 다형성을 잘 지원해주고 있다.
}
