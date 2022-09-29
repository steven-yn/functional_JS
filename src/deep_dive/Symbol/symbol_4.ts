import { log } from "console";

// 이 경우에는 value 인 1,2,3,4 에는 의미가 없고 상수의 이름자체에 의미가 있다.
const Direction_1 = {
  up: 1,
  down: 2,
  left: 3,
  right: 4,
};

const myDirection_1 = Direction_1.up;

if (myDirection_1 === Direction_1.up) {
  log("up!"); // up!
}

// 이 경우 문제는 상수 값 1,2,3,4 가 변경될수 있으며,
// 다른 변수값과 중복 될 수도 있다는 것이다.
// 이러한 경우 변경 / 중복될 가능성이 있는 무의미한 상수 대신 symbol 을 사용할수 있다.

const Direction_2 = {
  up: Symbol("up"),
  down: Symbol("down"),
  left: Symbol("left"),
  right: Symbol("right"),
};

const myDirection_2 = Direction_2.up;

if (myDirection_2 === Direction_2.up) {
  log("up!!"); // up!!
}
