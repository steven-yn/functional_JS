export function map(fn: (elem: any) => any, iter: Iterable<any>) {
  let res = [];

  for (const a of iter) {
    res.push(fn(a));
  }

  return res;
}

export function filter(fn: (elem: any) => any, iter: Iterable<any>) {
  let res = [];

  for (const a of iter) {
    if (fn(a)) res.push(a);
  }

  return res;
}

export function reduce(
  fn: (result: any, data: any) => any,
  acc: number | Iterable<any>,
  iter?: Iterable<any> | Iterator<any>
) {
  if (!iter) {
    acc = acc as Iterable<any>;
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter as Iterable<any>) {
    acc = fn(acc, a);
  }

  return acc;
}
