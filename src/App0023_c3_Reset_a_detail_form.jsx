import { useState } from "react";

const initialContacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

function ContactList({ contacts, handleContactClick }){
    return (
        <>
            {contacts.map(contact => (
                <button key={contact.id} onClick={() => handleContactClick(contact.id)}>{contact.name}</button>
            ))}
        </>
    )
}

function EditContact({ selectedContact }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handleResetClick(){
        setName(selectedContact.name);
        setEmail(selectedContact.email);
    }

    return(
        <>
            <label>
                Name: 
                <input onChange={handleNameChange} defaultValue={selectedContact.name}/>
            </label>
            <br />
            <label>
                Email: 
                <input onChange={handleEmailChange} defaultValue={selectedContact.email}/>
            </label>
            <br />
            <button>Save</button>
            <button onClick={handleResetClick}>Reset</button>
        </>
    )
}

function ContactManager(){
    const [contacts, setContacts] = useState(initialContacts);
    const [selectedContact, setSelectedContact] = useState(contacts[0]);

    function handleContactClick(contactId){
        setSelectedContact(contacts.find(contact => (contact.id === contactId)));
    }
    
    return(
        <>
            <ContactList 
                handleContactClick={handleContactClick}
                contacts={contacts}
            />
            <br />
            <EditContact 
                selectedContact={selectedContact}
            />
        </>
    )
}

export default function App(){
    return (
        <ContactManager />
    )
}