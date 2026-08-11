import { useState, useEffect } from 'react';

function Image(){
    return(
        <img 
            src="https://react.dev/images/docs/scientists/ZF6s192.jpg" 
            alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals" 
        />
    );
}

function Clock({time}){
    // in this component the time prop is changing every second 
    // but the input is not
    // so react is only rendering the time h1 tag not to input tag
    
    return (
        <>
            <h1>{time}</h1>
            <input />
        </>
    )
}

function useTime(){
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => {setTime(new Date());}, 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}

export default function App(){
    const time = useTime();
    return(
        <section>
            <h1>Inspiring Sculptures</h1>
            <Image />
            <Image />
            <Image />
            <Clock time={time.toLocaleTimeString()} />
        </section>
    )
}