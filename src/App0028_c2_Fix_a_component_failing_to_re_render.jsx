import { useRef, useState } from 'react';

function Toggle(){
    const [isOn, setIsOn] = useState(false);

    return(
        <button onClick={() => {
            setIsOn(!isOn);
        }}>
            {isOn ? 'On' : 'Off'}
        </button>
    )
}

export default function App(){
    return(
        <Toggle />
    )
}