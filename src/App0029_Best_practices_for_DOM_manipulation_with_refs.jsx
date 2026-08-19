import { useState, useRef } from "react"


function Counter(){
    const [show, setShow] = useState(true);
    const ref = useRef(null);

    return (
        <>
            <button onClick={(e) => setShow(!show)}>
                Toggle with setState
            </button>
            <button onClick={() => {ref.current.remove();}}>
                Remove from the DOM
            </button>
            {show && <p ref={ref}>Hello world</p>}
        </>
    )
}

export default function App(){
    return (
        <Counter />
    )
}