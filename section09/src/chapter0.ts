/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
    a:number;
}

type ObjB = {
    a:number;
    b:number;
}

type B = ObjB extends ObjA ? number : string;

/** 
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>

let varB : StringNumberSwitch<string>

function removeSpaces<T>(text : T):T extends string ? string : undefined //오버로드 시그니처를 만들면 구현 시그니처 내부에서 조건부 타입의 결과를 추론할 수 있게 됨.
function removeSpaces(text : any){
    if(typeof text === "string"){
        // 여기서 text의 타입은 string으로 추론됨.
        // 다른 타입을 반환하면 오버로드 시그니처가 문제를 감지해줌
        return text.replaceAll(" ","")

    } else {
        return undefined
    }
}

let result = removeSpaces("hi im winterlood");
console.log(result);
result.toUpperCase();

let result2 = removeSpaces(undefined);