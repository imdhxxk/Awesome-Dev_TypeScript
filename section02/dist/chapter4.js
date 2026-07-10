"use strict";
// 타입 별칭
Object.defineProperty(exports, "__esModule", { value: true });
// 같은 스코프에 같은 이름의 타입 별칭을 정의할 수 없음.
// 함수 내에 user라는 타입이 함수 내에  있으면 user로 정의된다.
// 이건 ts문법이기 때문에 js에선 없어진다.
let user = {
    id: 1,
    name: "이정환",
    nickname: "lee",
    birth: "1990-01-01",
    bio: "안녕하세요",
    location: "부천시"
};
let user2 = {
    id: 1,
    name: "홍길동",
    nickname: "lee",
    birth: "1990-01-01",
    bio: "안녕하세요",
    location: "부천시"
};
let contryCodes = {
    Korea: 'ko',
    UnitedStates: 'us',
    UnitedKingdom: 'uk',
};
let contryNumberCodes = {
    Korea: 410,
    // UnitedStates:840,
    // UnitedKingdom:826,
};
