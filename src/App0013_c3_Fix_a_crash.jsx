import { useState } from 'react';

function FeedbackForm(){
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
    }

    function handleSend(e){
        setMessage(e.target.value)
    }

    if(isSent){
        return <h1>Thank You!</h1>
    } else {
        return(
            <form onSubmit={handleSubmit}>
                <textarea placeholder='Message' value={message} onChange={handleSend} />
                <br />
                <button type='submit'>Send</button>
            </form>
        )
    }
}

export default function App(){
    return(
        <FeedbackForm />
    )
}