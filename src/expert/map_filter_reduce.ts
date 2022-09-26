import { log } from "console";
import { filter, map, reduce } from "../lib/functions";

export const MFR_test1 = () => {
  const products = [
    { name: "반팔티", price: 15000 },
    { name: "긴팔티", price: 20000 },
    { name: "핸드폰케이스", price: 15000 },
    { name: "후드티", price: 30000 },
    { name: "바지", price: 25000 },
  ];

  // 특정 금액 이하의 가격들을 뽑아서, 이 가격을 모두 합친 금액이 얼마인지 계산해보자.

  // reduce 가 사용하는 보조함수 add()
  const add = (a: number, b: number) => a + b;

  const filterResult_1 = filter((product) => product.price < 20000, products); // [{ name: "반팔티", price: 15000 }, { name: "핸드폰케이스", price: 15000 }]
  const mapResult_1 = map((product) => product.price, filterResult_1); // [15000, 15000]
  const reduceResult_1 = reduce(add, mapResult_1); // 30000

  const mapResult_2 = map((product) => product.price, products); // [15000, 20000, 15000, 30000, 25000]
  const filterResult_2 = filter((price) => price < 20000, mapResult_2); // [15000, 15000]
  const reduceResult_2 = reduce(add, filterResult_2); // 30000

  // 위 아래의 결과가 동일한 30000원이 된다.

  reduce(
    add,
    map(
      (product) => product.price,
      filter((product) => product.price < 20000, products)
    )
  );

  reduce(
    add,
    filter(
      (price) => price < 20000,
      map((product) => product.price, products)
    )
  );

  // 이 자리있는 코드가 평가 되었을때 숫자가 있는 배열로 평가가 될것을 기대하면서
  // reduce 와 add 를 작성하면, 잘 동작할 준비가 된 코드를 이미 작성할수 있다.
  // 따라서 아래 배열 자리에 내가 어떠한 코드를 작성해야 한다고 생각하고 접근할수 있다.
  reduce(add, [10, 20, 30, 40]); // 100

  // 따라서 map 을 통해서 숫자가 있는 배열이 평가 될것으로 기대하고 아래와 같이 작성할수 있다.
  // reduce 또한 숫자 값으로 평가될것을 기대할수 있다.

  reduce(
    add,
    map((product) => product.price, products)
  ); // 105000

  // 또한 products 역시 추출 되기 전에 이자리에 들어올 데이터들을
  // 특정 조건의 products 들만 평가되어져 있는 배열로 코드를 작성하면 되겠다 생각할수 있다.
  reduce(
    add,
    map((product) => product.price, products)
  );

  reduce(
    add,
    map(
      (product) => product.price,
      [
        { name: "반팔티", price: 15000 },
        { name: "핸드폰케이스", price: 15000 },
      ]
    )
  );

  log(
    reduce(
      add,
      map(
        (product) => product.price,
        filter((product) => product.price < 20000, products)
      )
    )
  );
};
