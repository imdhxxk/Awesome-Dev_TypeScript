"use strict";
/**
 * 분산적인 조건부 타입
 * 유니온 타입을 할당하게 되면 분산적인 조건부 타입이 됨
 */
Object.defineProperty(exports, "__esModule", { value: true });
let a; // string
let b; // number
let c; // string | number
//StringNumberSwitch<number>
//StringNumberSwitch<string>
let d;
// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>
// 2 단계
// never |
// string |
// never
// 결과
// string
