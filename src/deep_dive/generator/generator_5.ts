function* genFunc_5() {
  // 처음 next 메서드 호출시 첫번쨰 yield 식 까지 실행되고 일시 중지 된다.
  // 이 때 yield 된 값 1 은 result 객체의 value 로 할당된다.
  // 여기서 x 에는 1이 할당 되지 않는다.
  const x: number = yield 1;

  // 두번째 next 메서드 호출시 전달한 인수 10 은 첫번째 yield 를 할당 받은
  // x 에 할당된다. 즉, const x = yield 1; 은 두번째 next 호출시 완료된다.
  // 두 번째 next 호출시 두 번째 yield 까지 실행되고 일시 중지된다.
  // 따라서 yield x + 10 은 next 호출로 반환되는 result 객체의 value 로 반환된다.
  const y: number = yield x + 10;

  // 세번째 next 호출시 전달한 인수 20 은 두번째 yield 표현식을 할당받는 y 변수에 할당된다.
  // const y = yield (x+10) 은 세번째 next 메서드를 호출했을때 완료된다.
  // 일반적으로 제너레이터 반환값은 의미가 없다.
  // 따라서 제너레이터에서는 값을 반환할 필요가 없고 return 은 종료의 의미로 사용해야 한다.
  return x + y;
}

// 제너레이터 함수를 호출시 제너레이터 객체를 반환.
const gener_5 = genFunc_5();

// 처음 호출하는 next 메서드 에는 인수를 전달하더라도 무시된다.
// next 메서드가 반환한 이터레이터 result 객체의 value 프로퍼티에는 첫번째 yield 된 값 1 이 할당된다.
let res = gener_5.next();
console.log(res); // {value : 1, done: false}

// next 메서드에 인수로 전달한 10 은 함수의 x 변수에 할당된다.
// value 에는 두번째 yield 문을 실행한 20 이 할당된다.
res = gener_5.next(10);
console.log(res); // {value : 20, done: false}

res = gener_5.next(20);
console.log(res); // { value: 30, done: true }
