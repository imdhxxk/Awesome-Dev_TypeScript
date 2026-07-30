"use strict";
/**
 * 사용자 정의 타입 가드
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isDog(animal) {
    return animal.isBark !== undefined;
}
function isCat(animal) {
    return animal.isScratch !== undefined;
}
function warning(animal) {
    if (isDog(animal)) {
        animal;
    }
    else if (isCat(animal)) {
        animal;
    }
}
