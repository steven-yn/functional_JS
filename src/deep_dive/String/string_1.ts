import { log } from "console";

const strObj = new String();
log(strObj); // [String: '']

const strObj1 = new String("yoonOcean");
log(strObj1); // [String: 'yoonOcean']

log(strObj1[0]); // y

// strObj1[1] = "A";
// log(strObj1);

let strObj2 = new String(123);
log(strObj2); // [String: '123']

let strObj3 = new String(null);
log(strObj3); // [String: 'null']

log(String(1)); // 1
log(String(NaN)); // NaN
log(String(Infinity)); // Infinity
log(String(true)); // true
log(String(false)); // false
