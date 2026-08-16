import { useState } from "react";

const contacts = [
    { id: 0, name: 'Alice', email: 'alice@mail.com' },
    { id: 1, name: 'Bob', email: 'bob@mail.com' },
    { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

function Button({contact}){
    const [show, setShow] = useState(false);

    function handleClick(){
        setShow(!show);
    }

    return(
        <>
            {show && <p>{contact.email}</p>}
            <button onClick={handleClick}>{show ? "Hide email" : "Show email"}</button>
        </>
    )
}

function Contact({reverse}){
    return(
        <>
            <ul>
                {!reverse ?
                    contacts.map(contact => (
                        <li key={contact.id}>
                            <p><b>{contact.name}</b></p>
                            <Button contact={contact} />
                            <br /><br />
                        </li>
                    ))  
                : 
                    contacts.map((_, index, arr) => {
                        const contact = arr[arr.length - 1 - index];
                        // return your JSX or transformed value using `contact`
                        return(
                            <li key={contact.id}>
                                <h3>{contact.name}</h3>
                                <Button contact={contact} />
                                <br /><br />
                            </li>
                        )
                    })
            }
            </ul>
        </>
    )
}

function ContactList(){
    const [reverse, setReverse] = useState(false);
    function handleChange(){
        setReverse(!reverse);
    }

    return (
        <>
            <label >
                <input onChange={handleChange} type="checkbox" />
                {' '} Show in reverse order
            </label>
            <Contact reverse={reverse} />
        </>
    )
}

export default function App(){
    return (
        <ContactList />
    )
}