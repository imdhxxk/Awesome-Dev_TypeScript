"use strict";
/**
 * 제네릭
 */
Object.defineProperty(exports, "__esModule", { value: true });
function func(value) {
    return value;
}
let num = func(10);
if (typeof num === "number") {
    num.toFixed();
}
let bool = func(true);
let str = func("string");
let arr = func([1, 2, 3]);
