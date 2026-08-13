import { useState } from 'react';

function submitForm(answer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima';
            if(shouldError){
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

function Form(){
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if(status === 'success'){
        return <h1>That's right!</h1>
    }

    function handleChange(e){
        setAnswer(e.target.value);
    }

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

    return (
        <>
            <h1>City quiz</h1>
            <p>In which city is there a billboard that turns air into drinkable water? </p>
            <form onSubmit={handleSubmit}>
                <textarea 
                    onChange={handleChange} 
                    disabled={status === 'submitting'} 
                    value={answer} placeholder='Enter city' 
                />
                <br />
                <button 
                    disabled={answer.length === 0 || status === 'submitting'} 
                    type='submit'
                >Submit</button>
                { error !== null && <p className='Error'>{error.message}</p>}
            </form>
        </>
    )
}

export default function App(){
    return(
        <Form />
    )
}