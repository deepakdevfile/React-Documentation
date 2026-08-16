import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [isHover, setIsHover] = useState(false);

    function handleClick() {
        setCount(count + 1);
    }

    function handleHoverOn() {
        setIsHover(true);
    }

    function handleHoverOff() {
        setIsHover(false);
    }

    const color = isHover ? "orange" : "white";

    return (
        <section
            onPointerEnter={handleHoverOn}
            onPointerLeave={handleHoverOff}
        >
            <h1>{count}</h1>
            <button onClick={handleClick}>Add one</button>
        </section>
    )
}

export default function App(){
    const [isBreak, setIsBreak] = useState(false);

    function handleClick() {
        setIsBreak(!isBreak);
    }

    return (
        <>
            {isBreak ? <p>See you later!</p> : <Counter />}
            <label >
                <input type="checkbox" onClick={handleClick} />
                Take a break
            </label>
        </>
        
    )
}