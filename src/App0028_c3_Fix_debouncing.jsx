import { useRef } from 'react';

function DebouncedButton({ onClick, children }){
    const timeoutID = useRef(null);

    return(
        <button onClick={() => {
            clearTimeout(timeoutID.current);
            timeoutID.current = setTimeout(() => {
                onClick();
            }, 5000);
        }}>
            {children}
        </button>
    )
}

function Dashboard(){
    return (
        <>
            <DebouncedButton
                onClick={() => alert('Spaceship launched!')}
            >
                Launch the spaceship
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Soup boiled!')}
            >
                Boil the soup
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Lullaby soung!')}
            >
                Sing a lullaby
            </DebouncedButton>
        </>
    )
}

export default function App(){
    return(
        <Dashboard />
    )
}