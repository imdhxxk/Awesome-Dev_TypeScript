/**
 * 선언 합침
 */

interface Person  {
    name:string
}

interface Person {
    // name:number 충돌남 서브 타입도 불가
    name:string;
    age:number;
}

interface Developer extends Person {
    name:"hello";
}

const person: Person = {
    name:"",
    age:27
}

/**
 * 모듈보강
 */

 interface Lib {
    a:number
    b:number
 }

 interface Lib {
    c:string
 }

const lib: Lib = {
    a:1,
    b:2,
    c:"hello"

}