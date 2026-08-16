import { useState } from "react";

export default function App(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    // don't do this. this is bad. defining components inside another component
    function MyComponent() {
        const [text, setText] = useState('');

        function handleChange(e) {
            setText(e.target.value);
        }

        return (
            <input onChange={handleChange} />
        )
    }

    return(
        <>
            <MyComponent />
            <button onClick={handleClick}>Clicked {count} times</button>
        </>
    )
}