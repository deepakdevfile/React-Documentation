import { useState, useEffect } from "react";

function sendMessage(message){
    console.log('Sending message: ' + message);
}

function Form(){
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState('');

    function handleChange(e){
        setMessage(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        setShowForm(!showForm);
        sendMessage(message);
    }

    if(!showForm){
        return(
            <>
                <h1>Thanks for using aour services!</h1>
                <button onClick={() => {
                    setMessage('');
                    setShowForm(true);
                }}>
                    Open Chat
                </button>
            </>
        )
    }

    return(
        <form onSubmit={handleSubmit}>
            <textarea 
                onChange={handleChange}
                value={message}
                placeholder="Message"
            ></textarea>
            <br />
            <button type="submit" disabled={message === ''}>
                Send
            </button>
        </form>
    )
}

export default function App(){
    return (
        <Form />
    )
}