import { useState } from 'react';

function delay(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

function RequestTracker(){
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick(){
        // awesome multiple users are clicking the buy button at the same time
        // to process each buy request we need 3 sec 
        // then we remove the request for process
        // and increase the completed counter by one

        //  now this is interesting part is when two person click the 
        // buy button at the gap of 100 ms then it will not take 6 sec to complete 
        // transcation. it will only take 3 sec + 100 ms. because delay of 3 sec start 
        // indiviually for the buyers 
        setPending(pending => pending + 1);
        await delay(3000);
        setPending(pending => pending - 1);
        setCompleted(completed => completed + 1);
    }

    return(
        <>
            <h3>Pending: {pending}</h3>
            <h3>Completed: {completed}</h3>
            <button onClick={handleClick}>Buy</button>
        </>
    )
}

export default function App(){
    return(
        <RequestTracker />
    )
}