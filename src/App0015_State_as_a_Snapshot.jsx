import { useState } from 'react';

// setting state always triggers a render
function Form(){
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!');

    function handleSubmit(e){
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
    }

    function handleChange(e){
        setMessage(e.target.value);
    }

    if(isSent){
        return <h1>Your message is on its way!</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea onChange={handleChange} placeholder='Message' value={message} />
            <button type='submit'>Send</button>
        </form>
    )
}

function sendMessage(message){

}

// working of react to update DOM 
function Counter(){
    const [number, setNumber] = useState(0);

    function handleClick(){
        // state only updates once
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
    }

    return(
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}> +3 </button>
        </>
    )
}

// state over time 
function Counter2() {
    const [number, setNumber] = useState(0);

    function handleClick() {
        // alert just after call state change 
        setNumber(number + 5);
        alert(number);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}> +5 </button>
        </>
    )
}

function Counter3() {
    const [number, setNumber] = useState(0);

    function handleClick() {
        // alert 3 sec after call state change
        setNumber(number + 5);
        setTimeout( () => {alert(number);}, 3000);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}> +5 </button>
        </>
    )
}

function Form2(){
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {alert(`You said ${message} to ${to}`);}, 5000);
    }

    function handleMessageChange(e){
        setMessage(e.target.value);
    }

    function handleOptionChange(e){
        setTo(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label style={{display: "block"}}> To: {' '}
                <select value={to} onChange={handleOptionChange}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <textarea value={message} onChange={handleMessageChange} placeholder='Messsage' style={{display: "block"}} />
            <button type='submit'>Send</button>
        </form>
    )
}

export default function App(){
    return(
        <>
            <Form />
            <Counter />
            <Counter2 />
            <Counter3 />
            <Form2 />
        </>
    )
}