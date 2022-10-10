function* genFunc_2() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.error(e);
  }
}

const generator_2 = genFunc_2();

console.log(generator_2.next()); // {value : 1, done: false}
console.log(generator_2.return()); // {value : 2, done: true}

function* genFunc_3() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (error) {
    console.error(error);
  }
}

const generator_3 = genFunc_3();

console.log(generator_3.next()); // {value : 1, done: true}
console.log(generator_3.throw("err")); // {value : undefined, done: true}
