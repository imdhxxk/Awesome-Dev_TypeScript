"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123; // 소수점
let num4 = -0.123; // 음수 소수점
let num5 = Infinity; // 무한
let num6 = -Infinity; // 음수의 무한
let num7 = NaN; // not a number
// num1.toFixed(2); // 소수점 2자리까지 표현
// num1.toUpperCase(); // 문자열 전용 함수라서 에러가남
// string
let str1 = "Hello";
let str2 = 'Hello';
let str3 = `Hello`;
let str4 = `Hello ${num1}`; // 템플릿 리터럴
// str1 =123; // 에러 발생, number 타입을 string 타입에 할당할 수 없음
// str1.toFixed(2); // 에러 발생, number 타입 전용 함수라서 에러가남
// boolean
let bool1 = true;
let bool2 = false;
// 다른 타입을 넣으려고 하면 문제가 발생함.
// nulll
let null1 = null;
// undefined
let unde1 = undefined;
// 리터럴 타입
// 리터럴 -> 값
let numA = 10; // numA는 10이라는 값만 가질 수 있음
let strA = "Hello"; // strA는 "Hello"라는 값만 가질 수 있음
// let boolA: true = false; // boolA는 true라는 값만 가질 수 있음
// let numA:number = null; // 컴파일러 옵션 strictNullChecks를 false로 설정하면 null과 undefined를 다른 타입에 할당할 수 있음 
// strictNullChecks은 엄격한 null 체크를 수행하는 옵션으로, true로 설정하면 null과 undefined를 다른 타입에 할당할 수 없게 됨. false로 설정하면 null과 undefined를 다른 타입에 할당할 수 있음.
