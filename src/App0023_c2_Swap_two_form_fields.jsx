import { useState } from "react";

function FirstName(){
    const [firstName, setFirstName] = useState('');

    function handleChange(e){
        setFirstName(e.target.value);
    }

    return(
        <label style={{ display: "block" }}>
            First name:
            <input onChange={handleChange} type="text" placeholder="First name" />
        </label>
    )
}

function LastName(){
    const [lastName, setLastName] = useState('');

    function handleChange(e){
        setLastName(e.target.value);
    }
    return(
        <label style={{ display: "block" }}>
            Last name:
            <input onChange={handleChange} type="text" placeholder="Last name" />
        </label>
    )
}

function Form(){
    const [reverse, setReverse] = useState(false);

    function handleChange(){
        setReverse(!reverse);
    }

    return(
        <>
            {reverse ? <FirstName key={1}/> : <LastName key={2}/>}
            {!reverse ? <FirstName key={1}/> : <LastName key={2}/>}
            <input type="checkbox" onChange={handleChange}/> Reverse order
        </>
    )
}

export default function App(){
    return (
        <Form />
    )
}