console.log(document.querySelectorAll("*")); // NodeList(7) [html, head, body ...]

// 이런 형태의 값을 map() 함수를 통해 내부에 있는 값을 수집해보려고할때
// map() 함수를 사용해보면 에러가난다.
// 에러에 나온 내용처럼, NodeList 에는 map() 함수가 없다.
// console.log(document.querySelectorAll("*").map((el) => el.nodeName));
// TypeError : document.queryS.... map is not a function

console.log([1, 2, 3].map((a) => a + 1)); // [2, 3, 4]
console.log(map((el) => el.nodeName, document.querySelectorAll("*"))); // ['HTML', 'HEAD', 'BODY' ...]

const it = document.querySelectorAll("*")[Symbol.iterator]();
console.log(it); // [Function Iterator]
console.log(it.next()); // {value: html, done: false}
console.log(it.next()); // {value: head, done: false}
console.log(it.next()); // {value: body, done: false}

// 이렇게 때문에 이터러블 프로토콜을 따르는 for...of 문을 통해 순회가 가능한 것이다.
// 따라서 우리가 직접 구현한 map 함수는 이터러블 프로토콜을 따르는 많은 값들을 사용할수 있다.

// 제너레이터를 통해서도 사용이 가능하다.
// if 문이 있어도 사용할수 있게된다.
function* gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
}

console.log(
  map((a) => a * a),
  gen()
); // [4, 16]

let m = new Map();
m.set("a", 10);
m.set("b", 20);

const mit = m[Symbol.iterator]();
console.log(mit.next()); // {value: ['a', 10], done: false}
console.log(mit.next()); // {value: ['b', 20], done: false}
console.log(mit.next()); // {value: undefined, done: true}

// Map 객체도 이터러블 프로토콜을 따르기 때문에, 우리가 구현한 map 함수에서 보조함수를 통해 원하는 값을 수집할수 있다.
console.log(map(([k, v]) => [k, v * 2], m)); // [['a', 20], ['b', 40]]

// map 함수는 이런식의 조합도 가능하다.
// 다시 Map 객체를 생성할수도 있다.
console.log(new Map(map(([k, v]) => [k, v * 2], m))); // Map (2) {'a' => 20, 'b' => 40 }
