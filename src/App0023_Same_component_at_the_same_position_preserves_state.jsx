import { useState } from "react";

function Counter({isFency}) {
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
    const textColor = isFency ? "red" : "black";
    const borderValue = isFency ? "10px solid green" : "";

    return (
        <section
            onPointerEnter={handleHoverOn}
            onPointerLeave={handleHoverOff}
            style={{ backgroundColor: color, border: borderValue }}
        >
            <h1 style={{color: textColor}}>{count}</h1>
            <button onClick={handleClick}>Add one</button>
        </section>
    )
}

export default function App(){
    const [fency, setFency] = useState(false);

    function handleClick(){
        setFency(!fency);
    }

    return (
        <>
            {fency ? <Counter isFency={true} /> : <Counter isFency={false} />}
            {/* when you render a different component in the same position, it resets the state of its entire subtree. */}
            {fency ? <div><Counter isFency={true} /></div> : <section><Counter isFency={false} /></section>}
            <label >
                <input type="checkbox" onClick={handleClick} />
                Fency Counter
            </label>
        </>
    )
}