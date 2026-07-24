/**
 * 타입 좁히기
 * 조건문 들을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */
// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
function func(value) {
    // value
    // value.toUpperCase();
    // value.toFixed();
    if (typeof value === "number") { // 타입 좁히기 타입이 보장이 될 수 있을 때 자동으로 해당 타입으로 좁아진다 
        console.log(value.toFixed()); // 조건문을 사용해서 타입을 좁힐 수 있는 표현들을 타입 가드라고 부른다.
    }
    else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) { // null에 typeof를 해도 object를 반환해 getTime을 사용할 수 없음
        console.log(value.getTime);
    }
    else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살입니다.`);
    }
}
export {};
