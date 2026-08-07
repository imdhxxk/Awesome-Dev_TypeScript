/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
    title : string;
    content : string;
    author : {
        id:number;
        name : string;
        age : number;
    }
}[]

function printAuthorInfo(author : PostList[number]["author"]) { //["author"] 인덱스 라고 부름 값이 아니라 타입이 들어가야함
    console.log(`${author.name}-${author.id}`);
}

const post : PostList[number] = {
    title : "게시글 제목",
    content : "게시글 본문",
    author : {
        id : 1,
        name : "이정환",
        age : 27    
    }
}

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean

type Tup3 = Tup[3];

type TupNum = Tup[number]; // number | string | boolean