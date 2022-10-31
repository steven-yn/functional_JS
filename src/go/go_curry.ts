import { log } from "console";
import { curry, filter, go, map, reduce } from "../lib/functions";

type ProductsType = {
  name: string;
  price: number;
};

export function go_curry() {
  const products = [
    { name: "반팔티", price: 15000 },
    { name: "긴팔티", price: 20000 },
    { name: "핸드폰케이스", price: 15000 },
    { name: "후드티", price: 30000 },
    { name: "바지", price: 25000 },
  ];

  const add = (a: number, b: number) => a + b;

  // 이전에 만들어 보았던 map filter reduce 함수의 중첩 사용을
  // 좀더 보기 좋게 만들어보는 코드를 작성해보자
  reduce(
    add,
    map(
      (product: ProductsType) => product.price,
      filter((product: ProductsType) => product.price < 20000, products)
    )
  );

  // products 로 시작하고, 순서는 반대가 된다.
  go(
    products,
    (products: ProductsType[]) =>
      filter((p: ProductsType) => p.price < 20000, products),
    (products: ProductsType[]) => map((p: ProductsType) => p.price, products),
    (prices: number[]) => reduce(add, prices),
    log
  ); // 30000

  const mult = curry((a: number, b: number) => a * b);

  // curry 를 감싸서 함수를 만들면, 먼저 함수가 바로 리턴된다.
  log(mult);
  // function (value: any, ...rest) {
  //   return rest.length
  //     ? fn(value, ...rest)
  //     : (...rest) => fn(value, ...rest);

  // 인자를 하나만 전달한 경우, 이 결과는 다시 함수가 리턴된다.
  // 리턴된 함수는 나머지 인자를 마저 전달했을때 받아두었던 인자와
  // 새로 받게되는 인자를 받도록 되어있다.
  log(mult(1));
  // (...rest) => fn(value, ...rest);

  // 두 인자를 받았으므로 실행 결과가 나오게 된다.
  log(mult(1, 2)); // 2

  const mult3 = mult(3); // (3) => fn(value, 3)
  log(mult3(10)); // 30
  log(mult3(5)); // 15
  log(mult3(3)); // 9

  go(
    products,
    (products: ProductsType[]) =>
      // 앞부분이 함수고, 이후에 products 를 넘기도록 할수 있게된다.
      // 하지만 영 이것만으로는 코드가 간단해져 보이지 않는다.
      filter((p: ProductsType) => p.price < 20000)(products),
    (products: ProductsType[]) => map((p: ProductsType) => p.price)(products),
    (prices: number[]) => reduce(add)(prices),
    log
  ); // 30000

  // products 를 인자로 받아서 앞의 인자로 받은 함수에 그대로 다시 products 를 전달하는것은,
  // procuts 를 미리 받아두고 다음 함수에 그대로 전달할수 있게 된다는 이야기 이다.

  go(
    products,
    filter((p: ProductsType) => p.price < 20000),
    map((p: ProductsType) => p.price),
    reduce(add),
    log
  ); // 30000
}

go_curry();
