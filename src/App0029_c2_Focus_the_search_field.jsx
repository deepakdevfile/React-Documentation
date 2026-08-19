import {useRef} from 'react';

function Page(){
    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }

    return (
        <>
            <nav>
                <button onClick={handleClick}>Search</button>
            </nav>
            <input ref={inputRef} type="text" placeholder="Looking for something?" />
        </>
    )
}

export default function App(){
    return(
        <Page />
    )
}