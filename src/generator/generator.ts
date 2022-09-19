// 제너레이터 : 이터레이터 이자 이터러블을 생성하는 함수
// yield 를 통해서 몇번의 next 를 사용해 값을 꺼내게 해줄 것인지 정할수 있다.
function* gen1() {
  yield 1;

  // 제너레이터는 순회할값을 문장으로 표현하는 것이라고도 말할수 있다.
  if (false) yield 2;

  yield 3;

  // 제너레이터 문법은 마지막에 return 값을 만들수 있다.
  // 유의 해야 할것은, 순회할때 return 값은 무시된다.
  // 마지막 done 이 true 가 될때 나오는 value 값이라고 이해하면 된다.
  return 100;
}

let iter = gen1();

// console.log(iter.next()); // {value: 1, done: false}
// console.log(iter.next()); // {value: 3, done: false}
// console.log(iter.next()); // {value: 100, done: true}
// console.log(iter.next()); // {value: 100, done: true}

// 제너레이터 실행결과는 이터러블
for (const a of gen1()) console.log(a); // 1 3
