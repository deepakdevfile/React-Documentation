import { useState } from 'react';

function EditProfile() {
    const [edit, setEdit] = useState(true);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastname] = useState('Jacobs');

    function handleSubmit(e) {
        e.preventDefault();
        setEdit(!edit);
    }

    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} >
            <label style={{display: "block"}}>
                First name:{' '}
                {edit ? <input onChange={handleFirstNameChange} value={firstName}/> : <b>{firstName}</b>}
            </label>
            <label style={{ display: "block" }}>
                Last name:{' '}
                {edit ? <input onChange={handleLastNameChange} value= {lastName}/> : <b>{lastName}</b>}
            </label>
            <button type="submit">
                {edit ? "Save Profle" : "Edit Profile"}
            </button>
            <p><i>Hello, {firstName} {lastName}!</i></p>
        </form>
    );
}

export default function App(){
    return(
        <EditProfile />
    )
}