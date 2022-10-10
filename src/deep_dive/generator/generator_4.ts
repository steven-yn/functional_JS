function* genFunc_4() {
  yield 1;
  yield 2;
  yield 3;
}

// 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
// 이터러블 - 이터레이터 인 제너레이터 객체는 next 메서드를 갖는다.
const generator_4 = genFunc_4();

// 처음 next 메서드를 호출하면 첫 번째 yield 표현식 까지 실행되고 일시 중지된다.
// next 메서드는 이터레이터 result 객체 ({value, done}) 를 반환한다.
console.log(generator_4.next()); // {value:1, done:false}

// 이런식으로 next 를 호출하다가, 마지막 값에 도달하면 {value: undefined, done: true} 가 반환된다.
