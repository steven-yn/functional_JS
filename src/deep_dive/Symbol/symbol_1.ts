import { log } from "console";

const key = Symbol("key");
log(typeof key); // symbol

let simpleObj = {};

// simpleObj[key] = "value";

// log(simpleObj["key"]); // value
