import { useEffect, useState, useRef } from "react";

function MyInput({value, onChange, shouldFocus}){
    const ref = useRef(null);

    useEffect(() => {
        if(shouldFocus){
            ref.current.focus();
        }
    }, [shouldFocus]);

    return (
        <>
            <input
                value={value}
                onChange={onChange}
                ref={ref}
            />
        </>
    )
}

function Form(){
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState('Honey');
    const [lastName, setLastName] = useState('Singh');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChnage(e){
        setLastName(e.target.value);
    }

    return(
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'} Form
            </button>
            <hr />
            {show && 
                <>
                    <label>
                        Enter your first name: 
                        <MyInput 
                            value={firstName}
                            onChange={handleFirstNameChange}
                            shouldFocus={true}
                        />
                    </label>
                    <br />
                    <label >
                        Enter your last name: 
                        <MyInput 
                            value={lastName}
                            onChange={handleLastNameChnage}
                            shouldFocus={false}
                        />
                    </label>
                    <p>Hello, <b>{fullName}</b></p>
                </>
            }
        </>
    )
}

export default function App(){
    return(
        <Form />
    )
}