import { log } from "console";

// Symbol 함수를 호출하여 유일무이한 심볼 값을 생성한다.
const mySymbol = Symbol();
log(typeof mySymbol); // symbol

log(mySymbol); // Symbol()

// new Symbol();

const mySymbol1 = Symbol("mySymbol");
const mySymbol2 = Symbol("mySymbol");

// log(mySymbol1 === mySymbol2); // false

const mySymbol3 = Symbol("mySymbol");

// description 과 toString 은 Symbol.prototype 의 프로퍼티다.
log(mySymbol3.description); // mySymbol
log(mySymbol3.toString()); // Symbol(mySymbol)

const mySymbol4 = Symbol();

// log(mySymbol4 + ""); // Error
// log(+mySymbol); // Error

log(!!mySymbol4); // true

if (mySymbol4) log("mySymbol4 is exist"); // mySymbol4 is exist
