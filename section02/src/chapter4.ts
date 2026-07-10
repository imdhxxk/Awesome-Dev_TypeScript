// 타입 별칭

type User = {
    id: number,
    name: string,
    nickname: string,
    birth: string,
    bio: string,
    location: string
}
// 같은 스코프에 같은 이름의 타입 별칭을 정의할 수 없음.
// 함수 내에 user라는 타입이 함수 내에  있으면 user로 정의된다.
// 이건 ts문법이기 때문에 js에선 없어진다.

let user: User = { 
    id:1,
    name:"이정환",
    nickname:"lee",
    birth : "1990-01-01",
    bio : "안녕하세요",
    location : "부천시"
};

let user2: User = { 
    id:1,
    name:"홍길동",
    nickname:"lee",
    birth : "1990-01-01",
    bio : "안녕하세요",
    location : "부천시"
};


// 인덱스 시그니처
// 규칙을 위반하지만 않으면 모든 객체를 허용함


type ContryCodes = {
    [ key: string]: string
}


let contryCodes: ContryCodes = {
    Korea : 'ko',
    UnitedStates : 'us',
    UnitedKingdom : 'uk',
}

type contryNumberCodes = {
    [key : string]: number
    // 반드시 들어가야되는 프로퍼티를 정의할 수 있음
    Korea : number,
    // 추가적인 프로퍼티를 정의할 때 인덱스 시그니처에 있는 타입과 일치해야함. number타입이기 때문에 number타입만 들어갈 수 있음
}

let contryNumberCodes: contryNumberCodes = {
    Korea:410,
    // UnitedStates:840,
    // UnitedKingdom:826,
}