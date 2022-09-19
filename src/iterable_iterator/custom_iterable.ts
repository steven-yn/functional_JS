// iterable 이라고 하는 값을 직접 정의해보자
const iterable = {
  // iterable 값은 Symbol.iterator 를 구현하고 있어야 됀다.
  // Symbole.iterator 는 이터레이터를 반환 해야 한다.
  [Symbol.iterator]() {
    let i = 3;

    // 이터레이터는 next 메소드를 가지고 있으며
    return {
      // next 는 value 와 done 을 가진 객체를 리턴해야한다.
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      // Symbol.iterator 를 실행했을때 리턴된 iterator 가
      // 자기 자신또한 이터러블 이면서, 어디에서든 이터레이터로 만들었을때
      // 이전까지 진행되어있던 자기 상태에서 계속해서 next() 를 할수 있도록 만들어 둔것이
      // 잘 만든 이터레이터 인것이다.
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();

// console.log(iterator.next()); // {value: 3, done: false}
// console.log(iterator.next()); // {value: 2, done: false}
// console.log(iterator.next()); // {value: 1, done: false}
// console.log(iterator.next()); // {done: true}

// 이터러블도 순회가 되고, 이터레이터도 순회가 되고
// 일정부분 진행한 후에 실행해도 순회가 되도록 하는것이 잘 만든 이터레이터이다.
for (const a of iterable) console.log(a); // 3 2 1
for (const a of iterator) console.log(a); // ( 자기 자신이 반환되지 않았을 경우 ) TypeError iterator is not iterable

const arr1 = [1, 2, 3];

// 잘 구현된 이터러블은, 이터레이터를 만들었을때
// 이터러블을 진행하다가 순회할수도 있고
// 그대로 값을 넣어도 처음부터 잘 실행된다

let iter1 = arr1[Symbol.iterator]();

// 이터러블의 이터레이터를 실행했을때, 자기 자신을 가지고 있을때
// well formed iterator, well formed iterable 이라고 할수있다.
// console.log(iter1[Symbol.iterator]() === iter1); // true

iter1.next();
for (const b of iter1) console.log(b); // 2 3

// console.log(document.querySelectorAll("*")); // NodeList(n)[html,head,body...]

const all = document.querySelectorAll("*");

for (const c of all) console.log(c); // <html> <head> <body> ...
// console.log(all[Symbol.iterator]()); // Array iterator{}

let iter2 = all[Symbol.iterator]();
// console.log(iter2.next()); // {value : html, done: false}
// console.log(iter2.next()); // {value : head, done: false}
// console.log(iter2.next()); // {value : body, done: false}
