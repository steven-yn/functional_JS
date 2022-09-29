import { log } from "console";

// mySymbol 이라는 키로 저장된 symbol 이 없으면 새로운 symbol 을 생성
const s1 = Symbol.for("mySymbol");
// mySymbol 이라는 키로 저장된 symbol 이 있으면 해당 symbol 을 반환
const s2 = Symbol.for("mySymbol");

// log(s1 === s2); // true

const s3 = Symbol.for("mySymbol");
// symbol 값의 key 를 추출
log(Symbol.keyFor(s3)); // mySymbol

// 이 경우엔 전역 심볼 레지스트리에 등록되지 않는다.
const s4 = Symbol("foo");

log(Symbol.keyFor(s4)); // undefined

log(Symbol.keyFor(Symbol.for("tokenString")) == "tokenString"); // true
