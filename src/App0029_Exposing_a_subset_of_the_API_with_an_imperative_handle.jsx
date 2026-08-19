import {useRef, useImperativeHandle} from 'react';

function MyInput({ref}){
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus(){
            realInputRef.current.focus();
        },
    }));
    return(
        <input ref={realInputRef} type="text" />
    )
}

function Form(){
    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }

    return(
        <>
            <MyInput ref={inputRef}/>
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}

export default function App(){
    return (
        <Form />
    )
}