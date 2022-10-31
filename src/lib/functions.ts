export const map = curry((fn: (elem: any) => any, iter: Iterable<any>) => {
  let res = [];

  for (const a of iter) {
    res.push(fn(a));
  }

  return res;
});

export const filter = curry((fn: (elem: any) => any, iter: Iterable<any>) => {
  let res = [];

  for (const a of iter) {
    if (fn(a)) res.push(a);
  }

  return res;
});

export const reduce = curry(
  (
    fn: (result: any, data: any) => any,
    acc: number | Iterable<any>,
    iter?: Iterable<any> | Iterator<any>
  ) => {
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
);

export function go(...argus: any[]) {
  return reduce((value: any, fn: any) => fn(value), argus);
}

export function pipe(
  fn: (...values: number[]) => number,
  ...functions: ((value: number) => number)[]
) {
  return (...value: number[]) => go(fn(...value), ...functions);
}

export function curry(fn: (a?: any, b?: any) => any) {
  // 1. 먼저 함수를 리턴한다.
  // 2. 리턴된 함수를 실행했을때 인자가 두개 이상이라면
  // 3. 인자로 받았던 함수에 인자를 전달하여 즉시실행시킨다.
  // 4. 아니라면 다시 그 이후에 받은 인자들을 합쳐서 실행하는 함수를 리턴한다.
  return function (value: any, ...rest: Parameters<any>) {
    return rest.length
      ? fn(value, ...rest)
      : (...rest: Parameters<any>) => fn(value, ...rest);
  };
}
