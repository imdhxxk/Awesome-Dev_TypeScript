/**
 * 타입 추론
 */

// let a : number = 10;
// function func(param){ // 파라미터는 뭐가 들어올지 몰라 추론불가

// }
let a = 10;
let b = "hello";
let c = {
    id:1,
    name:"임동혁",
    profile:{
        nickname:"winterlood",
    },
    urls: ["https://winterlood.com"],
}

let {id, name, profile} = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello"){
    return "hello";
}

// 암묵적 any타입 d:any라 쓰면 계속 any타입이지만 let d 라고 쓰면 타입이 계속 변화한다.

let d;

d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello" // 상수는 값이 더이상 변하지 않기 때문에 string타입이 아니라 string 리터럴 타입으로 추론됨

let arr = [1,"string"]; //유니온으로 추론 두 타입이 한번에 있기 때문




