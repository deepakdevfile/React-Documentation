import { useState } from "react";

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

function Chat({contact}){
    const placeHolder = `Chat to ${contact.name}`;
    return(
        <>
            <textarea placeholder={placeHolder}></textarea>
            <br />
            <button>Send to {contact.email}</button>
        </>
    )
}

function ContactList({ handleClick }){
    return (
        <>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <button onClick={handleClick} value={contact.name}>{contact.name}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}


function Messanger(){
    const [to, setTo] = useState(contacts[0]);
    function handleClick(e){
        setTo(contacts.find(contact => (contact.name === e.target.value)));
    }

    return(
        <>
            <ContactList handleClick={handleClick}/>
            <Chat key={to.id} contact={to} />
        </>
    )
}

export default function App(){
    return (
        <Messanger />
    )
}