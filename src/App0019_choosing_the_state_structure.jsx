import {useState} from 'react';

function Form(){
    const [firstName, setFristName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e){
        setFristName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    return(
        <>
            <h2>Let's check you in</h2>
            <label style={{display: "block"}}>
                First name: {' '} 
                <input onChange={handleFirstNameChange} value={firstName} />
            </label>
            <label style={{ display: "block" }}>
                Last name: {' '} 
                <input onChange={handleLastNameChange} value={lastName} />
            </label>
            <p>Your ticket will be issued to: <b>{firstName + " " + lastName}</b></p>
        </>
    )
}

export default function App(){
    return (
        <Form />
    )
}