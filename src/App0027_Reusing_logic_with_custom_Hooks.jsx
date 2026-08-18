import {useState, useEffect} from 'react';

function useDelayedValue(value, delay) {
    const [delayedValue, setDelayedValue] = useState(value);

    useEffect(() => {
        setTimeout(() => {
            setDelayedValue(value);
        }, delay);
    }, [value, delay]);

    return delayedValue;
}

function usePointerPosition(){
    const [postion, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        function handleMove(e){
            setPosition({x: e.clientX, y: e.clientY});
        }
        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);
    }, []);

    return postion;
}

function Dot({position, opacity}){
    return(
        <div
            style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvnets: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }}
        />
    )
}

function Canvas(){
    const pos1 = usePointerPosition();
    const pos2 = useDelayedValue(pos1, 100);
    const pos3 = useDelayedValue(pos2, 100);
    const pos4 = useDelayedValue(pos3, 100);
    const pos5 = useDelayedValue(pos4, 100);
    const pos6 = useDelayedValue(pos5, 100);

    return(
        <>
            <Dot position={pos1} opacity={1} />
            <Dot position={pos2} opacity={0.9} />
            <Dot position={pos3} opacity={0.8} />
            <Dot position={pos4} opacity={0.7} />
            <Dot position={pos5} opacity={0.6} />
            <Dot position={pos6} opacity={0.5} />
        </>
    )
}

export default function App(){
    return(
        <Canvas />
    )
}

