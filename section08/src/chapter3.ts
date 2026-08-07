/**
 * 맵드 타입
 * 타입 별칭으로 맵드 타입을 정의할 수 있다.
 * 맵드 타입은 기존 타입을 기반으로 새로운 타입을 정의할 때 유용하다.
 */

interface User {
    id:number;
    name:string;
    age:number;
}

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
}

type BooleanUser = {
    [key in keyof User]: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명의 유저를 불러오는 기능
function fetchUser(): ReadonlyUser {
    //... 기능
    return {
        id: 1,
        name: "이정환",
        age: 27
    }
}

const user =fetchUser()
// user.id = 1// readonly 속성이라서 수정 불가


function updateUser(user: PartialUser){
    //... 수정하는 기능
}

updateUser({
    id:1,
    name:"이정환",
    age:15
})