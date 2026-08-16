import { use, useState } from "react";

function Counter({person}){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return(
        <>
            <h1>{person}'s Score: {count}</h1>
            <button onClick={handleClick}>Add one</button>
        </>
    )
}

export default function App(){
    const [person, setPerson] = useState('Taylor');

    function handleClick(){
        if(person === 'Taylor'){
            setPerson('Sarah');
        } else{
            setPerson('Taylor');
        }
    }

    return (
        <>
            {/* Option 1: Rendering a component in different positions */}
            {(person === 'Taylor') && <Counter person={'Taylor'} />}
            {(person === 'Sarah') && <Counter person={'Sarah'} />}

            {/* Option 2: Resetting state with a key  */}
            {(person === 'Taylor') ? 
                <Counter key={'Taylor'} person={'Taylor'} /> 
                : <Counter key={'Sarah'} person={'Sarah'} />
            }

            <button onClick={handleClick}>
                Next Player!
            </button>
        </>
    )
}