/**
 * 타입 단언
 */

type Person = {
    name:string;
    age:number;
}

let person = {

} as Person

person.name="이정환";
person.age=27

type Dog = {
    name:string;
    color:string;
}

let dog = {
    name :"돌돌이",
    color:"brown",
    breed: "진도"
} as Dog

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; //다중 단언

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name:"야옹이",
    color:"yello",
} as const // 모든 프로퍼티를 read-only로 만들 수 있음

/**
 * Non Null 단언
 */

type Post = {
    title:string;
    author?: string;
}

let post:Post = {
    title:"게시글",
    author:"이정환",
}

const len: number = post.author!.length

//타입 단언은 실제로 값을 그 타입으로 바꾸는 건 아니고 ts 컴파일러가 그렇게 믿도록 만드는 것 
// 예를들어 Non-null 단언 을 사용할 때 값이 없어도 있다고 믿음.