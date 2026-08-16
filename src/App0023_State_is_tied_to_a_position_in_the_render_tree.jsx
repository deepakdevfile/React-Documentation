import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const [isHover, setIsHover] = useState(false);

    function handleClick(){
        setCount(count + 1);
    }

    function handleHoverOn(){
        setIsHover(true);
    }

    function handleHoverOff(){
        setIsHover(false);
    }

    const color = isHover ? "orange" : "white";

    return (
        <section 
            onPointerEnter={handleHoverOn} 
            onPointerLeave={handleHoverOff}
            style={{backgroundColor: color}}
        >
            <h1>{count}</h1>
            <button onClick={handleClick}>Add one</button>
        </section>
    )
}

export default function App(){
    // const counter = <Counter />
    const [showB, setShowB] = useState(true);

    function handleClick(){
        setShowB(!showB);
    }

    return (
        <>
            <Counter />
            {showB && <Counter /> }
            <label >
                <input type="checkbox" onClick={handleClick}/>
                Render the second counter
            </label>
            {/* {counter}
            {counter} */}
        </>
    )
}