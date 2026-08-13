import { useState } from "react";

// children을 사용하려면 ReactElement라는 react에서 제공해주는 타입을 사용해 정의한다
interface Props {
    onClickAdd : (text: string) => void
}

export default function Editor(props : Props){
    const [text, setText] = useState("");

    const onChangeInput = (e : React.ChangeEvent<HTMLInputElement, HTMLInputElement> ) => { //{target : {value:string}} 위험한 방식
        setText(e.target.value);
    }

    const onClickButton = () => { 
        props.onClickAdd(text)
        setText("");
    }

    return (
        <div>
            <input 
                value={text}
                onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
        </div>
    )
}