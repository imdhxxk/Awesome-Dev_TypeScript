/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

// tag를 안쓸경우 교집합이 생기는데
// 쓴경우 교집합이 생기지 않는다. 이유는 tag를 리토럴 타입으로 쓴경우 admin이면서 member이여야지만 교집합이 생기는데 
// 리터럴 타입을 쓰면 값이 딱 하나의 값만 포함된다. 
// 이걸 경우 서로소 집합의 관계를 갖게된다.
// User는 서로소 관계에 있는 객체 타입들을 유니온 타입으로 묵어서
// 서로소 유니온 타입이 됐다

type Admin = {
    tag: "ADMIN";
    name : string;
    kickCount:number;
};

type Member = {
    tag:"MEMBER";
    name:string;
    point:number;
};

type Guest = {
    tag:"GUEST"
    name:string;
    visitCount:number;
};

type User = Admin | Member | Guest;

//Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
//Member -> {name}님 현재까지 {point}모았습니다.
//Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.

function login(user:User){
    switch(user.tag) {
        case "ADMIN" : {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER" : {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
            break;
        }
        case "GUEST" : {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)
            break;
        }
        
    }

    // if(user.tag === "ADMIN"){
    //     //admin 타입
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
    // } else if (user.tag === "MEMBER") {
    //     // member 타입
    //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)

    // } else {
    //     //guest 타입
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)

    // }
}


/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
    state : "LOADING";
}

type FailedTask = {
    state : "FAILED";
    error : {
        message:string;
    };
}

type SuccessTask = {
    state : "SUCCESS";
    response : {
        data:string;
    };
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;


// type AsyncTask = {
//     state : "LOADING" | "FAILED" | "SUCCESS";
//     error?: {
//         message:string;
//     };
//     response?:{
//         data:string
//     }
// }

//로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지 출력
// 성공 -> 성공 : 데이터를 출력
// 타입이 좁혀지지 않아서 AsyncTask로 돼있다 
// 그리고 error, response 프로퍼티는 선택으로 돼있기 때문에 테스크에 에러가 있는지 없는 지 확실하지 않다.
// 그리고 좁혀질 타입이 없다. 그래서 서로소 유니온 타입으로 만들어야된다.
// 서로소 유니온 타입을 사용하면 switch문 같은걸 사용할 때 안전하게 사용할 수 있음

function processResult(task:AsyncTask){
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중")
            break;
        }
        case "FAILED":{
            console.log(`에러 발생 ; ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response.data}`)
        }
    }
}


const loading:AsyncTask = {
    state:"LOADING",
}

const failed:AsyncTask = {
    state:"FAILED",
    error: {
        message:"오류 발생 원인은~",
    },
}

const success:AsyncTask = {
    state:"SUCCESS",
    response:{
        data:"데이터~~",
    },
}