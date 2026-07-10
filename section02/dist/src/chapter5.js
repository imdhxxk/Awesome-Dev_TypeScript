"use strict";
// enum 타입 
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST"; //2 <- 게스트
})(Role || (Role = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN // 0 <- 관리자
};
const user2 = {
    name: "홍길동",
    role: Role.USER //1 <- 일반유저
};
const user3 = {
    name: "김철수",
    role: Role.GUEST //2 <- 게스트
};
