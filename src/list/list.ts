import { log } from "console";

export function list() {
  // es5 이하 버전

  var numList = [1, 2, 3];

  for (var i = 0; i < list.length; i++) {
    console.log(numList[i]); // 1 2 3
  }

  var str = "abc";
  for (var j = 0; j < str.length; j++) {
    console.log(str[j]); // a b c
  }

  // es6+

  for (const a of numList) {
    log(a); // 1 2 3
  }

  for (const b of str) {
    log(b); // a b c
  }
}
