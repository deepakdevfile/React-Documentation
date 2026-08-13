import { useState } from "react";

function submitForm(answer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = (answer.toLowerCase() !== 'lima');
            if(shouldError){
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else{
                resolve();
            }
        }, 1500);
    });
}

function Form(){
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(false);
    const [status, setStatus] = useState('typing');

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        } catch(err){
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e){
        setAnswer(e.target.value);
    }

    if(status === 'success'){
        return <h1>That's right!</h1>
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water ?</p>
            <form onSubmit={handleSubmit}>
                <textarea onChange={handleTextareaChange} disabled={status === 'submitting'}  value={answer}/>
                <br />
                <button disabled={answer.length === 0 || status === 'submitting'}>
                    Submit
                </button>
            </form>
            {error !== null &&
                <p className="Error">
                    {error.message}
                </p>}
        </>
    )
}

export default function App(){
    return (
        <Form />
    )
}