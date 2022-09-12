import { log } from "console";

export function ArrayFn() {
  log("Arr-------");

  let arr = [1, 2, 3];
  let iter1 = arr[Symbol.iterator]();

  iter1.next();

  for (const a of iter1) log(a); // 2 3
}

export function SetFn() {
  log("Set-------");
  const set = new Set([1, 2, 3]);

  // log(set[0]); // undefined
  // log(set[1]); // undefined
  // log(set[2]); // undefined

  // Set 객체는 이터러블 프로토콜을 따르고 있고, for...of 문도 이터러블 프로토콜을
  // 따르고 있기 때문에 동작하는 것이다.

  let iter1 = set[Symbol.iterator]();

  log(iter1.next()); // { value: 1, done: false }
  log(iter1.next()); // { value: 2, done: false }
  log(iter1.next()); // { value: 3, done: false }
  log(iter1.next()); // { value: undefined, done: true }

  for (const a of set) log(a);
}

export function MapFn() {
  log("Map-------");
  const map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);

  let iter1 = map[Symbol.iterator]();
  let iter2 = map[Symbol.iterator]();

  log(iter1.next()); // { value: [ 'a', 1 ], done: false }
  log(iter1.next()); // { value: [ 'b', 2 ], done: false }
  log(iter1.next()); // { value: [ 'c', 3 ], done: false }
  log(iter1.next()); // { value: undefined, done: true }

  iter2.next();

  for (const a of map) log(a); // [ 'a', 1 ] [ 'b', 2 ] [ 'c', 3 ]
  for (const b of iter2) log(b); // [ 'b', 2 ] [ 'c', 3 ]

  log(map.keys()); // [Map Iterator] { 'a', 'b', 'c' }

  let iter3 = map.keys();

  log(iter3.next()); // { value: 'a', done: false }
  log(iter3.next()); // { value: 'b', done: false }
  log(iter3.next()); // { value: 'c', done: false }
  log(iter3.next()); // { value: undefined, done: true }

  for (const c of map.keys()) log(c); // a b c
  for (const c of map.values()) log(c); // 1 2 3
  for (const c of map.entries()) log(c); // [ 'a', 1 ] [ 'b', 2 ] [ 'c', 3 ]

  // Map 의 내장 메서드를 사용한 값은 이터레이터이다.

  let iter4 = map.values();
  log(iter4[Symbol.iterator]); // [Function: [Symbol.iterator]]

  // Symbol.iterator 를 그대로 가지고 있기 떄문에 for of 문에서
  // entries() 의 결과를 심볼 이터레이터를 실행한것을 가지고 다시 순회를 하는것이다.

  let iter5 = iter4[Symbol.iterator]();

  // values() 를 사용해 리턴된 이터레이터를 다시 이터레이터 추출하게되면
  // 자기 자신이 다시 나오도록 되어있다.

  log(iter5.next()); // { value: 1, done: false }
  log(iter5.next()); // { value: 2, done: false }
  log(iter5.next()); // { value: 3, done: false }
  log(iter5.next()); // { value: undefined, done: true }
}
