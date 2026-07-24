/**
 * Unknown 타입
 */
function unKnownExam() {
    let a = 1;
    let b = "hello";
    let c = true;
    let d = null;
    let e = undefined;
    let unknownVar;
    // let num : number = unknownVar;
    // let str : string = unknownVar;
    // let bool : boolean = unknownVar; 다운 캐스팅이기 때문에 안됨
}
/*
* Never 타입 : 모두의 서브타입임 하지만 반대로 모두가 슈퍼타입이기 때문에 에러가 남
*/
function neverExam() {
    function neverFunc() {
        while (true) {
        }
    }
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    // let never1:never=10;
    // let never2:never="string";
    // let never3:never=true;
}
/**
* Void 타입 : undefined이 서브타입이기 때문에 undefined를 반환할 수 있고 undefined를 저장할 수 있다.
*/
function voidExam() {
    function voidFunc() {
        console.log("hi");
        return undefined;
    }
    let voidVar = undefined;
}
/**
 * any 타입: 치트키 타입이라고 불림, 모든키의 슈퍼타입으로 위치하기도하기 never를 제외한 모든 타입의 서브타입으로도 위치함
 * 타입 계층도를 무시함
 */
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar;
}
export {};
