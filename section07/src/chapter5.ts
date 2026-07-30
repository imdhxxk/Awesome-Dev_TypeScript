/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20);  타입 선언이 되어 있기 때문에 타입 변수로 비동기 처리의 결과 타입을 정해줄 수 있지만 실패했을 때의 결과 값은 정해줄 수 없다 

        //또한 제네릭 타입 정의를 뺴놓으면 기본적으로 unknown타입으로 추론된다.
        reject("~때문에 실패")
    },3000);
});

promise.then((response) => [
    console.log(response * 10) //20
])

promise.catch((err) => {
    if( typeof err === "string") {
        console.log(err) //프로젝트에 상황에 맞게 에러의 형태를 타입 좁히기를 사용하면 편리하다
        
    }
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 * 서버로부터 하나의 게시글 데이터를 불러오는 함수만들기
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost() : Promise<Post>{ // 반환값타입을 정의하는게 보기 쉽기떄문에 추천 
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                id:1,
                title:"게시글 제목",
                content:"게시글 컨텐츠",
            })
        }, 3000)
    })
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id
})