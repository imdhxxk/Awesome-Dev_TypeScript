/**
 * 인터페이스의 확장
 */

// 인터페이스에 같은 프로퍼티를 많이 사용할 때 사용

interface Animal {
    name : string
    color : string
}

interface Dog extends Animal {
    // name : "hello" //number // 원본의 서브타입이여야 가능함
    isBark: boolean
}


const dog : Dog = {
    name:"", // 
    color:"",
    isBark:true
}

interface Cat extends Animal{
    isScratch: boolean
}

interface Chicken extends Animal {
    isFly:boolean
}

// 다중확장
interface DogCat extends Dog, Cat {

}

const dogCat: DogCat = {
    name:"",
    color:"",
    isBark:true,
    isScratch:true
}

