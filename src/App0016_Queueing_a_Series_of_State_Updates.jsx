import { useState } from 'react';

// React batches state updates
function Counter(){
    const [number, setNumber] = useState(0);

    function handleClick(){
        // Updating the same state multiple times before the next render 
        // setNumber(number => number + 1);
        // setNumber(number => number + 1);
        // setNumber(number => number + 1);

        // updating state after replacing it 
        // setNumber(number + 5);
        // setNumber(n => n + 1);

        // replace state after updating it 
        setNumber(number + 5);
        setNumber(n => n + 1);
        setNumber(42);

        // Naming conventions
        // setEnabled(enabled => !enabled)
        // can be written as
        // setEnabled(e => !e);
    }

    return(
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}>+3</button>
        </>
    )
}

export default function App(){
    return(
        <Counter />
    )
}