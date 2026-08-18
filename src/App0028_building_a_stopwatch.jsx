import { useState, useRef } from "react"

function Stopwatch(){
    const [startTime, setStartTime] = useState(null);
    const [nowTime, setNowTime] = useState(null);
    const intervalRef = useRef(null);

    function handleStart(){
        setStartTime(Date.now());
        setNowTime(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNowTime(Date.now());
        }, 10);
    }

    function handleStop(){
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if(startTime != null &&  nowTime !== null){
        secondsPassed = (nowTime - startTime) / 1000;
    }

    return (
        <>
            <h1>Time passed: {secondsPassed}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default function App(){
    return (
        <Stopwatch />
    )
}