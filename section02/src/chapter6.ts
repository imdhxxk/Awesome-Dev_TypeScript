// any
// 특정 변수의 타입을 확실히 모를 때
let anyVar : any = 10;
anyVar = "hello"; // any 타입은 어떤 타입이든 할당 가능


anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // any 타입은 어떤 타입이든 할당 가능하기 때문에 에러가 발생하지 않음. 하지만 런타임에서 에러가 발생할 수 있음. 따라서 any 타입은 최대한 사용하지 않는 것이 좋음.
anyVar.toFixed(); // any 타입은 어떤 타입이든 할당 가능하기 때문에 에러가 발생하지 않음. 하지만 런타임에서 에러가 발생할 수 있음. 따라서 any 타입은 최대한 사용하지 않는 것이 좋음.

let num: number = 10;
num = anyVar; // any 타입은 어떤 타입이든 할당 가능하기 때문에 에러가 발생하지 않음. 하지만 런타임에서 에러가 발생할 수 있음. 따라서 any 타입은 최대한 사용하지 않는 것이 좋음.

// unknown

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = ()=>{};

if (typeof unknownVar === "number") {
    num= unknownVar; // unknown 타입은 어떤 타입이든 할당 가능하지만, 다른 타입에 할당할 때는 타입 단언을 해야함. 따라서 unknown 타입은 최대한 사용하지 않는 것이 좋음.
}

num = unknownVar; // unknown 타입은 어떤 타입이든 할당 가능하지만, 다른 타입에 할당할 때는 타입 단언을 해야함. 따라서 unknown 타입은 최대한 사용하지 않는 것이 좋음.