import { useRef } from "react";

function Page(){
    const ref = useRef(null);
    return(
        <>
            <nav>
                <button onClick={(e) => {ref.current.focus()}}
                >
                    Search
                </button>
            </nav>
            <input ref={ref} type="text" placeholder="Looking for something ?" />
        </>
    )
}

export default function App(){
    return (
        <Page />
    )
}