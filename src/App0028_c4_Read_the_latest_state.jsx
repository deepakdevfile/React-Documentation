import { useState, useRef } from "react"

function Chat(){
    const [text, setText] = useState('');
    const textRef = useRef(text);

    function handleSend(){
        setTimeout(() => {
            alert('Sending: ' + textRef.current);
        }, 10000);
    }

    function handleChange(e){
        setText(e.target.value);
        textRef.current = e.target.value;
    }

    return (
        <>
            <input 
                type="text" 
                value={text}
                onChange={handleChange}
            />
            <button onClick={handleSend}>
                Send
            </button>
        </>
    )
}

export default function App(){
    return (
        <Chat />
    )
}