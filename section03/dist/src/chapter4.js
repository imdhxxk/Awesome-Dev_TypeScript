/**
 * 대수 타입
 *  -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 *  -> 합집합 타입과 교집합 타입이 존재합니다.
 */
/**
 * 1. 합집합 - Union 타입 : 둘다 포함 되는 객체거나 아니면 하나에만 포함 되는 객체들만 포함된다.
 *  객체를 생성할 때 프로퍼티가 어느 한쪽에 딱 맞거나 모든 프로퍼티를 사용하거나
*/
let a;
a = 1;
a = "hello";
a = true;
let arr = [1, "hello", true];
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
// let union4: Union1 = {
//     name:"",
// }
/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable;
let intersection1 = {
    name: "",
    color: "",
    language: "",
};
export {};
