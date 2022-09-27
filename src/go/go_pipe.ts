import { log } from "console";
import { filter, map, reduce } from "../lib/functions";

export function go_pipe() {
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
      (product) => product.price,
      filter((product) => product.price < 20000, products)
    )
  );

  // 인자들을 통해서 하나의 값으로 축약을 해나가야한다.
  // 받아오는 인자들이 배열 리스트라고 가정하면 아래 코드와 같고,
  // 받는 배열의 첫번째 인자를 다음 인자로 전달하고, 그 결과를 또 그 다음 인자로 전달하는 형태가 되야한다.
  // argus 를 하나의 값을 축약해나가는, reduce 와 같은 형태이다.

  // reduce 인자의 첫번째 값으로 [0,f,f,f,f] 중 0이 초기값으로 전환되어 들어올것이고,
  // 두번째 값으로 두번째 함수가 들어오게 될것이다.
  // 그래서 두번째 함수인 a => a+1 이 실행되게 되면 1 이라는 값으로 평가가 될것이고,
  // 이 값은 다시 reduce 의 value 인자로 들어가게 되고, 세번째 함수가 fn 인자로 들어가게되어 실행될것이다.
  // 마지막에 log 함수에도 이전의 결과값이 전달이 되면서 log(value) 로 실행될것이다.

  const go = (...argus: any[]) => reduce((value, fn) => fn(value), argus); // 111

  // 결국 이 pipe 함수는 내부적으로 go() 를 사용하는 함수라고 볼수있다.
  // 함수들을 인자로 전달받고, 나중에 실행할 인자를 받는 형태이다.
  // const pipe =
  //   (...functions: ((value: number[]) => number)[]) =>
  //   (value: number) =>
  //     go(value, ...functions);

  // fn_2 가 받을 인자를 여러개의 인자로 받도록 하고
  // go 가 시작하는 부분에서 , 그다음 함수들이 실행되도록 하면 된다.
  const pipe =
    (
      // 이런식으로 함수를 하나 인자로 받아오면
      // 첫번째 함수만 꺼내고 나머지 함수들은 뒤에 따라오게 된다.
      fn: (...values: number[]) => number,
      ...functions: ((value: number) => number)[]
    ) =>
    // 반환할 함수에 여러개의 인자를 받고
    (...value: number[]) =>
      // go 를 시작하는 부분을 add(0, 1) 처럼 첫번째 함수의 인자를 펼쳐서 전달 하면 된다.
      go(fn(...value), ...functions);

  const fn_1 = pipe(
    (a: number) => a + 1,
    (a: number) => a + 10,
    (a: number) => a + 100
  );

  go([
    0,
    (a: number) => a + 1,
    (a: number) => a + 10,
    (a: number) => a + 100,
    log,
  ]); // 111

  // 따라서 이 함수를 원할때 실행하면 go() 에서 구현한 것과 동일한 값이 나오도록 구현해보자.
  log(fn_1(0)); // 111

  // 이런식으로 하면
  go([
    add(0, 1), // 1 로 평가되어진다.
    (a: number) => a + 10,
    (a: number) => a + 100,
    log,
  ]); // 111

  const fn_2 = pipe(
    (val1, val2) => val1 + val2,
    (a: number) => a + 10,
    (a: number) => a + 100
  );

  log(fn_2(0, 1), "fn_2"); // 111
}
