import { log } from "console";

const strObj4 = new String("yoon");

log(Object.getOwnPropertyDescriptors(strObj4));
// {
//   '0': {
//     value: 'y',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   '1': {
//     value: 'o',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   '2': {
//     value: 'o',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   '3': {
//     value: 'n',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   length: { value: 4, writable: false, enumerable: false, configurable: false }
// }