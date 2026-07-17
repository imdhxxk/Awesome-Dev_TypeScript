// void
// void -> 공허 -> 아무것도 없다.
// voud -> 아무것도 없음을 의미하는 타입

function func1() : string {
    return "hello"
}

function func2() : void { // undefined는 리턴이 undefined이거나 아에 없을 때 가능 null은 null만 반환 해야됨
    console.log("hello");
    
}

let a: void;

// a = 1;
// a = "hello";
a = {};
a = undefined;
// a = null;  // "strictNullChecks": false를 사용하면 null이 들어갈 수 있음


// never
// never -> 존재하지 않는
// 불가능한 타입
// 절대로 정상적으로 종료될 수 없어서 반환 값이 있는 자체가 모순인 경우 사용
function func3(): never {
    while(true) {}
}

function func4(): never {
    throw new Error();
}

// let a: never;
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;

//never타입은 "strictNullChecks": false이 옵션이 꺼져 있어도 null값을 담을 수 없다.
// any타입도 never타입의 변수에는 절대 담을 수 없다.