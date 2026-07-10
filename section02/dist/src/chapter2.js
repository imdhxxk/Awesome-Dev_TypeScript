// 배열
let numArr = [1, 2, 3];
let strArr = ["Hello", "im", "winterlood"];
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr = [1, "hello", true];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1,2,3]; // 에러 발생, 길이가 고정되어있기 때문에 3개의 요소를 넣을 수 없음
// tup1 =["1","2"]; // 에러 발생, 타입이 고정되어있기 때문에 string 타입을 넣을 수 없음
let tup2 = [1, "2", true];
export {};
