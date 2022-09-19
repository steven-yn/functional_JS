import { log } from "console";

export function reduce_1() {
  log("reduce 1");

  // 이 값들을 모두다 더해서 하나의 값으로 만든다 할때
  // reduce 를 사용하게 된다.
  const nums = [1, 2, 3, 4, 5];

  // 간단한 방법으로 이 로직을 구현해보자.
  let total = 0;

  // 특정 값을 순회하며 하나의 값으로 누적해 나갈때
  // 이런 코드를 쓴다.
  for (const n of nums) {
    total = total + n;
  }

  log(total);
}

export function reduceDefault() {
  log("reduce default");

  // reduce 함수를 이해하기 위해 먼저 외부 인터페이스를 살펴보자
  // 함수가 있다고 가정
  const reduce = (any1: any, any2: any, any3: any) => {};

  const add = (a: number, b: number) => a + b;

  //   log(reduce(add, 0, [1,2,3,4,5])) // 이 결과가 15가 나오도록 하는 함수이다.
  // 초기값으로 시작하고
  log(add(add(add(add(add(0, 1), 2), 3), 4), 5));
  // 연속적으로, 재귀적으로 받은 보조함수를 실행하면서 하나의 값으로 누적해나간다.
}

export function reduce_2() {
  const nums = [1, 2, 3, 4, 5];

  const add = (a: number, b: number) => a + b;

  // acc : 누적값
  const reduce = (fn: Function, acc: number, iter: Iterable<any>) => {
    for (const a of iter) {
      // 순회하는 행동을 보조함수에게 위임,
      // 위의 코드랑 비교해보면, 더하는 연산을 하는 함수를 전달받아 위임.
      acc = fn(acc, a);
    }

    // 외부 블록에 영향을 주는것이 아닌, 함수의 리턴값으로 반환
    return acc;
  };

  log(reduce(add, 0, nums)); // 15
}

export function reduce_3() {
  // 이와같이 초기값이 없을때, JS 는 이터러블의 첫번째 값을 꺼내서
  // log(reduce(add, [1, 2, 3, 4, 5]));
  // 아래와 같이 초기값을 생성한다.
  // log(reduce(add, 1, [ 2, 3, 4, 5]));

  log("reduce 3");

  const nums = [1, 2, 3, 4, 5];

  const add = (a: number, b: number) => a + b;

  const reduce = (
    fn: Function,
    acc: number | Iterable<any>,
    iter?: Iterable<any> | Iterator<any>
  ) => {
    // 초기값이 없을때는, iter 인자에 전달된것이 없을것이다.
    if (!iter) {
      // acc 가 이터레이터 일것이다.
      acc = acc as Iterable<any>;
      // Symbol.iterator 를 실행해서 이터러블 값으로 변환시킨다.
      iter = acc[Symbol.iterator]();
      // acc 값은 이터러블 안의 첫번째 값이 되야하므로, next() 로 하나 꺼내서 할당해준다.
      acc = iter.next().value;
    }

    for (const a of iter as Iterable<any>) {
      acc = fn(acc, a);
    }

    return acc;
  };

  log(reduce(add, nums)); // 15
}
