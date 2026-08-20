import { useState } from "react";

const initialContacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

function ContactList({contacts, selectedId, handleClick}){
    
    return(
        <section>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <button onClick={() => handleClick(contact.id)}>
                            {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

function EditForm({selectedContact, handleSave}){
    const [name, setName] = useState(selectedContact.name);
    const [email, setEmail] = useState(selectedContact.email);

    function handleResetClick() {
        setName(selectedContact.name);
        setEmail(selectedContact.email);
    }

    function handleSaveClick() {
        const updatedData = {
            id: selectedContact.id,
            name: name,
            email: email
        };
        handleSave(updatedData);
    }

    return (
        <section>
            <label >
                Name: {' '}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label >
                Email: {' '}
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleSaveClick}>
                Save
            </button>
            <button onClick={handleResetClick}>
                Reset
            </button>
        </section>
    )
}

function EditContact(props){
    return (
        <EditForm 
            {...props}
            key={props.selectedContact.id}
        />
    )
}

function ContactManager(){
    const [contacts, setContacts] = useState(initialContacts);
    const [selectedId, setSelectedId] = useState(0);
    const selectedContact = contacts.find(c => c.id === selectedId);

    console.log(selectedContact);

    function handleSave(updatedData){
        const nextContacts = contacts.map(c => {
            if(c.id === updatedData.id){
                return updatedData;
            } else{
                return c;
            }
        });
        setContacts(nextContacts);
    }

    return (
        <>
            <ContactList 
                contacts={contacts}
                selectedId={selectedId}
                handleClick={id => setSelectedId(id)}
            />
            <hr />
            <EditContact 
                selectedContact={selectedContact}
                handleSave={handleSave}
            />
        </>
    )
}

export default function App(){
    return (
        < ContactManager />
    )
}