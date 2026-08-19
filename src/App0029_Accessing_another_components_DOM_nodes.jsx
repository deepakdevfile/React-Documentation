import { useRef } from 'react';

function MyInput({ref}){
    return <input ref={ref} type="text" />
}

function MyForm(){
    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }

    return(
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}

export default function App(){
    return(
        <MyForm />
    )
}