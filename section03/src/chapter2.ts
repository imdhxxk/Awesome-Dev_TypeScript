/**
 * Unknown 타입
 */

function unKnownExam(){
    let  a:unknown =1;
    let  b:unknown ="hello";
    let  c:unknown =true;
    let  d:unknown =null;
    let  e:unknown =undefined;

    let unknownVar : unknown;

    // let num : number = unknownVar;
    // let str : string = unknownVar;
    // let bool : boolean = unknownVar; 다운 캐스팅이기 때문에 안됨


}


/*
* Never 타입 : 모두의 서브타입임 하지만 반대로 모두가 슈퍼타입이기 때문에 에러가 남
*/

function neverExam(){
    function neverFunc(): never {
        while(true){

        }
    }
    let num : number = neverFunc();
    let str : string = neverFunc();
    let bool : boolean = neverFunc();
    
    // let never1:never=10;
    // let never2:never="string";
    // let never3:never=true;
}


/**
* Void 타입 : undefined이 서브타입이기 때문에 undefined를 반환할 수 있고 undefined를 저장할 수 있다.
*/

function voidExam() {
    function voidFunc() : void {
        console.log("hi");
        return undefined;
    }

    let voidVar: void = undefined;
}

/**
 * any 타입: 치트키 타입이라고 불림, 모든키의 슈퍼타입으로 위치하기도하기 never를 제외한 모든 타입의 서브타입으로도 위치함
 * 타입 계층도를 무시함
 */

function anyExam(){
    let unknownVar : unknown;
    let anyVar : any;
    let undefinedVar: undefined;
    let neverVar:never;

    anyVar = unknownVar;

    undefinedVar= anyVar;

    // neverVar = anyVar;
}