import { useState } from 'react';

const contacts = [
    {name: 'Taylor', email: 'taylor@mail.com'},
    {name: 'Alice', email: 'alice@mail.com'},
    {name: 'Bob', email: 'bob@mail.com'}
];

function Chat({contact}){
    const [text, setText] = useState('');

    function handleChange(e){
        setText(e.target.value);
    }

    return(
        <section className='chat'>
            <textarea 
                value={text} 
                placeholder={'Chat to ' + contact.name}
                onChange={handleChange}
            ></textarea>
            <br />
            <button>Send to {contact.email}</button>
        </ section>
    )
}

function ContactList({selectedContact, contacts, onSelect}){
    return(
        <section className="contact-list">
            <ul>
                {contacts.map(contact => (
                    <li key={contact.email}>
                        <button onClick={() => onSelect(contact)}>{contact.name}</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

function Messanger(){
    const [to, setTo] = useState(contacts[0]);
    return (
        <>
            <ContactList 
                contacts={contacts}
                selectedContact = {to}
                onSelect = {contact => setTo(contact)}
            />
            <Chat key={to.email} contact={to}/>
        </>
    )
}

export default function App(){
    return(
        <Messanger />
    )
}

// function Chat({ to, setMessage, message }) {
//     function handleChange(e) {
//         if (to === 'taylor') {
//             setTaylor(e.target.value);
//         } else if (to === 'alice') {
//             setAlice(e.target.value);
//         } else {
//             setBob(e.target.value);
//         }
//     }

//     return (
//         <>
//             <textarea onChange={handleChange} placeholder='Write a message'>{message}</textarea>
//             <button>Send to {to}@mail.com</button>
//         </>
//     )
// }

// function Messanger() {
//     const [to, setTo] = useState('taylor');
//     const [message, setMessage] = useState('');

//     const [taylor, setTaylor] = useState('');
//     const [alice, setAlice] = useState('');
//     const [bob, setBob] = useState('');

//     function handleClick(e) {
//         setTo(e.target.name);
//         if (to === 'taylor') {
//             setMessage(taylor);
//         } else if (to === 'alice') {
//             setMessage(alice);
//         } else {
//             setMessage(bob);
//         }
//     }

//     return (
//         <>
//             <button name='taylor' onClick={handleClick}>Taylor</button>
//             <button name='alice' onClick={handleClick}>Alice</button>
//             <button name='bob' onClick={handleClick}>Bob</button>
//             <Chat to={to} setMessage={set + (to.charAt(0).toUpperCase() + to.slice(1))}>
//                 {message}
//             </Chat>
//         </>
//     )
// }