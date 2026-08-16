import { useReducer, useState } from "react";

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const initialState = {
    selectedId: 0,
    message: 'Hello',
};

function ContactList({contacts, selectedId, dispatch}) {
    return (
        <>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button onClick={() => {
                            dispatch({
                                type: 'change_selection',
                                contactId: contact.id,
                            });
                        }}>
                            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                            
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

function Chat({ contact, message, dispatch }) {
    return(
        <>
            <textarea 
                placeholder={`Chat to ${contact.name}`}
                onChange={(e) => {
                    dispatch({
                        type: 'edit_message',
                        message: e.target.value,
                    })
                }}
                value={message}
            ></textarea>
            <br />
            <button>Send to {contact.email}</button>
        </>
    )
}

function messageReducer(state, action){
    switch(action.type){
        case 'change_selection':
            return{
                ...state,
                selectedId: action.contactId,
                message: '',
            }
        case 'edit_message':
            return{
                ...state,
                message: action.message,
            }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function Messenger() {
    const [state, dispatch] = useReducer(messageReducer, initialState);
    const message = state.message;
    const contact = contacts.find((c) => c.id === state.selectedId);
    return(
        <>
            <ContactList 
                contacts = {contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat 
                key={contact.id}
                contact={contact}
                message={message}
                dispatch={dispatch}
            />
        </>
    )
}

export default function App(){
    return(
        <Messenger />
    )
}