// enum 타입 
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 컴파일 시 사라지지 않음
enum Role {
    ADMIN, //0 <- 관리자 자동으로 처음 숫자 부터 1씩 증가
    USER, //1 <- 일반유저
    GUEST //2 <- 게스트 
}

enum Language {
    korean = "ko", // ko <- 한국어
    english = "en", // en <- 영어
}

const user1 = {
    name  :"이정환",
    role : Role.ADMIN, // 0 <- 관리자
    language : Language.korean // ko <- 한국어
}
const user2= {
    name  :"홍길동",
    role : Role.USER, //1 <- 일반유저
    language : Language.english // en <- 영어
}
const user3 = {
    name  :"김철수",
    role : Role.GUEST,  //2 <- 게스트
    language : Language.korean // ko <- 한국어
}
console.log(user1, user2, user3); // 0, 1, 2
 