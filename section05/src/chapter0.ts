/**
 * 인터페이스
 */

interface Person {
    name: string
    age? : number
    sayHi() : void
    sayHi(a:number, b:number) : void
} // 유니온 타입별칭 불가

const person: Person = {
    name : "이정환",
    sayHi : function () {
        console.log("hi")
    }
}

person.name = "홍길동"

person.sayHi();
person.sayHi(1,2);
