import { useState, useEffect } from 'react';

function Clock({ time }) {
    const hours = time.getHours();
    let className;
    if (hours >= 0 && hours <= 6) {
        className = 'night';
    } else {
        className = 'day';
    }
    return (
        <h1 id="time" className={className}>
            {time.toLocaleTimeString()}
        </h1>
    );
}

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function App() {
    const time = useTime();
    return (
        <Clock time={time} />
    );
}