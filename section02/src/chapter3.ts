// 객체

let user: {
    id? : number,
    name : string,
} = {
    id:1,
    name:"이정환",
}

user.id; // object 타입은 프로퍼티에 접근할 수 없음 그렇기 때문에 객체 리터럴 타입을 이용해야함

let dog : {
    name : string,
    color : string
} = {
    name : "돌돌이",
    color : "brown"
}

// ts의 객체는 구조를 기준으로 타입을 정의함. 이를 구조적 타입 시스템이라고 함. 이름을 기준으로 타입을 정의하는 건 명목적 타입 시스템을 사용함

//없어도 되는 프로퍼티를 빼고 싶을 경우 그 프로퍼티 뒤에 ?를 붙이면 됨. 이걸 선택적 프로퍼티라고 함(영어로 옵셔널 프로퍼티)

user = {
    name:"홍길동",
}

let config: {
    readonly apiKey:string
} = {
    apiKey:"MY API KEY",
}

config.apiKey = "hacked"; // 객체의 프로퍼티를 바꿀 수 있음  readonly를 붙이면 객체의 프로퍼티를 바꿀 수 없음. readonly는 읽기 전용 속성을 나타내며, 해당 속성은 객체가 생성된 후에는 변경할 수 없음을 의미함.