const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

let names = [];
for (const n of products) {
  names.push(n.name);
}
// console.log(names); // ['반팔티', '긴팔티' '핸드폰케이스', '후드티', '바지']

let prices = [];
for (const p of products) {
  prices.push(p.price);
}
// console.log(prices); // [15000, 20000, 15000, 30000, 25000]

// 위에서 구현한 로직과 거의 유사하다.
// 큰 차이점이 있다면, 함수내부에서 직접적으로 함수 외부로 변화를 일으키는 console.log 같은 함수를 사용하는것이 아닌
// 함수의 리턴값을 받아서 사용해야한다.
// 함수형 프로그래밍 에서는 함수가 인자와 리턴값으로 소통하는것을 권장한다.

const map = (f: (argu: any) => any, iter: Iterable<any>) => {
  let res = [];

  // map 함수는 이 부분을 추상화 한다.
  // 인자로 함수를 받아서, 어떤 값을 수집할 것인지 받아온 함수에게 완전히 위임한다.
  // for 문에도, 어떤값이 들어올지 모르니 추상화 한다.
  for (const a of iter) {
    res.push(f(a));
  }

  return res;
};

// 함수형 프로그래밍 에서는 map 이라는 함수에, 보조함수 를 받아서 iterable 안에 있는 값을
// 1대1 로 매핑 되면 어떠한 값을 수집하겠다고 보조함수를 전달하는 식으로 사용하게 된다.
// 이 map 함수는 고차함수 이기도 하다. 함수를 값으로 다루면서 원하는 시점에서 인자를 적용하는 고차함수다.
// console.log(map((p) => p.name, products)); // ['반팔티', '긴팔티' '핸드폰케이스', '후드티', '바지']
// console.log(map((p) => p.price, products)); // [15000, 20000, 15000, 30000, 25000]
