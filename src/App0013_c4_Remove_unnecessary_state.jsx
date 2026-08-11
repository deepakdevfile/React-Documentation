import { useState } from 'react';

function FeedbackForm() {
    function handleClick() {
        let name = prompt('What is your name?');
        alert(`Hello, ${name}!`);
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    );
}

export default function App(){
    return(
        <FeedbackForm />
    )
}