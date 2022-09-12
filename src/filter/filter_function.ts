const products2 = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const filter = (f: (argu: any) => boolean | number, iter: Iterable<any>) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

// let under20000 = [];
// for (const p of products2) {
//   if (p.price < 20000) under20000.push(p);
// }
// console.log(...under20000); // {name: '반팔티', price: 15000} {name: '핸드폰케이스', price: 15000}
console.log(...filter((p) => p.price < 20000, products2)); // {name: '반팔티', price: 15000} {name: '핸드폰케이스', price: 15000}

// 이 상태에서 다른 조건의 값을 걸러내야하면 어떻게 해야할까?
// 코드를 복사해서 if 문 내의 조건을 변경해야한다.

// let over20000 = [];
// for (const p of products2) {
//   if (p.price >= 20000) over20000.push(p);
// }
// console.log(...over20000); // {name: '긴팔티', price: 20000} {name: '후드티', price: 30000} {name: '바지', price: 25000}
console.log(...filter((p) => p.price >= 20000, products2)); // {name: '긴팔티', price: 20000} {name: '후드티', price: 30000} {name: '바지', price: 25000}

// 내부의 값의 다형성은 보조 함수에 의해서 지원 해준다.
// 외부의 경우는 이터러블 프로토콜을 따르는것으로 다형성을 지원 해줄수 있다.
// 따라서 많은 것들을 걸러낼수 있는 함수가 된다.
console.log(filter((n) => n % 2, [1, 2, 3, 4])); // [1, 3]
console.log(
  filter(
    (n) => n % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })()
  )
); // [1, 3, 5]
