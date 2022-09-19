function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(limit: number, iter: Iterable<any>) {
  for (const idx of iter) {
    yield idx;
    if (idx === limit) return;
  }
}

function* odds(limitNum: number) {
  for (const idx of limit(limitNum, infinity(1))) {
    if (idx % 2) yield idx;
  }
}

let oddsIter = odds(10);

// console.log(oddsIter.next()); // {value: 1, done: false}
// console.log(oddsIter.next()); // {value: 3, done: false}
// console.log(oddsIter.next()); // {value: 5, done: false}
// console.log(oddsIter.next()); // {value: 7, done: false}
// console.log(oddsIter.next()); // {value: 9, done: false}
// console.log(oddsIter.next()); // {value: undefined, done: true}

for (const idx of odds(40)) console.log(idx); // 1 3 5 7 9 ... 39
