"use strict";
/**
 * 조건부 타입
 */
Object.defineProperty(exports, "__esModule", { value: true });
let varA;
let varB;
function removeSpaces(text) {
    if (typeof text === "string") {
        // 여기서 text의 타입은 string으로 추론됨.
        // 다른 타입을 반환하면 오버로드 시그니처가 문제를 감지해줌
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    }
}
let result = removeSpaces("hi im winterlood");
console.log(result);
result.toUpperCase();
let result2 = removeSpaces(undefined);
