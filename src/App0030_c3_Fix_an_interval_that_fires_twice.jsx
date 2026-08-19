import { useEffect, useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        function onTick(){
            setCount(count => count + 1);
        }

        const intervalId = setInterval(onTick, 1000);
        return () => clearInterval(intervalId);
    })

    return (
        <>
            <h1>{count}</h1>
        </>
    )
}

export default function App(){
    const [show, setShow] = useState(false);
    
    return(
        <>
            <button onClick={(e) => setShow(!show)}>
                {show ? 'Hide ' : 'Show '} counter
            </button>
            <hr />
            {show && <Counter />}
        </>
    )
}