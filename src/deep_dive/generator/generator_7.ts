const async = (generatorFn: () => Generator<any, void, unknown>) => {
  const generator: Generator<any, void, unknown> = generatorFn();

  const onResolved = (arg?: any) => {
    const result = generator.next(arg);

    return result.done
      ? result.value
      : result.value.then((res: any) => onResolved(res));
  };

  return onResolved;
};

function* fetchTodo(): Generator<any, void, any> {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  const response = yield fetch(url);

  const todo = yield response.json();
  console.log(todo);
}

async(fetchTodo)();
