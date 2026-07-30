"use strict";
/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */
Object.defineProperty(exports, "__esModule", { value: true });
let a = () => 10;
let b = () => 10;
a = b; // 업 캐스팅 
let c = (value) => { };
let d = (value) => { };
// c = d;
d = c;
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
animalFunc = dogFunc;
let testFunc = (animal) => {
    console.log(animal.name);
    console.log(animal.color);
};
let testfunc2 = (dog) => {
    console.log(dog.name);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
// func2 = func1
// 할당하려는 타입의 매개변수의 개수가 적을 때만 가능 
// 그렇다 해도 타입 자체가 달라버리면 안됨
