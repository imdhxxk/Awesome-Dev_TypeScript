/**
 * 타입 단언
 */
let person = {};
person.name = "이정환";
person.age = 27;
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
};
/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10;
let num2 = 10;
let num3 = 10; //다중 단언
/**
 * const 단언
 */
let num4 = 10;
let cat = {
    name: "야옹이",
    color: "yello",
}; // 모든 프로퍼티를 read-only로 만들 수 있음
let post = {
    title: "게시글",
    author: "이정환",
};
const len = post.author.length;
export {};
//타입 단언은 실제로 값을 그 타입으로 바꾸는 건 아니고 ts 컴파일러가 그렇게 믿도록 만드는 것 
// 예를들어 Non-null 단언 을 사용할 때 값이 없어도 있다고 믿음.
