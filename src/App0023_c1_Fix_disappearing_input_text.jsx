import { useState } from "react";

function Form(){
    const [hint, setHint] = useState(false);
    const [text, setText] = useState('');

    function handleClick(){
        setHint(!hint);
    }

    function handleChange(e){
        setText(e.target.value);
    }

    return(
        <>
            {hint && <p><i>Hint: Your favorite city?</i></p> }
            <input type="text" onChange={handleChange}/>
            <br />
            <button onClick={handleClick}>{hint ? "Hide hint": "Show hint"}</button>
        </>
    )
}

export default function App(){
    return (
        <Form />
    )
}