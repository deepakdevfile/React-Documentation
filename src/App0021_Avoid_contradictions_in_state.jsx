import { isValidElement, useState } from 'react';

function sendMessage(text){
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}

function FeedbackForm(){
    const [text, setText] = useState('');
    const [status, setStatus] = useState('typing');

    const isSent = (status === 'sent');
    const isSending = (status === 'sending');
    
    function handleChange(e){
        setText(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('sending');
        await sendMessage(text);
        setStatus('sent');
    }

    if(status === 'sent'){
        return <h1>Thanks for feedback!</h1>
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea 
                value={text}
                disabled= {isSending}
                onChange={handleChange} 
                placeholder='Write your feedback'
            ></textarea>
            <br />
            <button disabled={isSending} type='submit'>Send</button>
            {isSending && <p>Sending...</p>}
            {isSending}
        </form>
    )
}

export default function App(){
    return (
        <FeedbackForm />
    )
}