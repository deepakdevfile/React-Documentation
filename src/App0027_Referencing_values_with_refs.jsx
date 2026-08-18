import { useRef, useState } from "react";

function Counter(){
    let [stateCount, setStateCount] = useState(0);
    let refCount = useRef(0);

    // state is constant in between renders untill we dont change it. 
    // how ref is different from state?
    function handleClickState(){
        setStateCount(stateCount + 1);
        alert('You clicked ' + stateCount + ' times!');
    }

    function handleClickRef(){
        refCount.current = refCount.current + 1;
        alert('You clicked ' + refCount.current + ' times!');
    }

    console.log(stateCount);
    console.log(refCount)

    return(
        <>
            <button onClick={handleClickState}>
                click me!
            </button>
            <button onClick={handleClickRef}>
                click me! I am different.
            </button>
        </>
    )
}

export default function App(){
    return(
        <Counter />
    )
}