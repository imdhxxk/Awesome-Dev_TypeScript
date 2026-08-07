/**
 * keyof 연산자
 */

// interface Person {
//     name : string;
//     age : number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {// 유니온으로 프로퍼티에 키의 타입을 정의할땐 key 가 많아지면 불편하다.
    // keyof 연산자는 person 객체 타입의 모든 프로퍼티 키를 유니온 타입으로 반환한다.
    return person[key];
}

const person = {
    name : "이정환",
    age : 27
}

getPropertyKey(person, "name"); // "이정환"