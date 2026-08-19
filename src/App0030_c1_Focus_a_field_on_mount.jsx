import { useState, useRef, useEffect } from "react"

function MyInput({value, onChange, show}){
    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    }, [show])

    return(
        <input 
            onChange={onChange} 
            value={value} 
            ref={ref} 
        />
    )
}

function Form(){
    const [show, setShow] = useState(false);
    const [name, setName] = useState('Taylor');
    const [upper, setUpper] = useState(false);

    return(
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'} form
            </button>
            <hr />
            {show && (
                <>
                    <label>
                        Enter your name:
                        <MyInput
                            show={show}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            onChange={(e) => setUpper(e.target.checked)}
                            checked={upper}
                        /> Make it uppercase
                    </label>
                    <p>
                        Hello, <b>{upper ? name.toUpperCase() : name}</b>
                    </p>
                </>
            )}
        </>
    )
}

export default function App(){
    return(
        <Form />
    )
}