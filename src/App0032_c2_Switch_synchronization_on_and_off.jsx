import { useState, useEffect } from "react"


function Dot(){
    const [canMove, setCanMove] = useState(true);
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        function handleMove(e){
            // Solution 1: 
            if(canMove){
                setPosition({ x: e.clientX, y: e.clientY });
            }
        }
        window.addEventListener('pointermove', handleMove);
        return () => window.removeEventListener('pointermove', handleMove);
        // Solution 2: 
        // if (canMove) {
        //     window.addEventListener('pointermove', handleMove);
        //     return () => window.removeEventListener('pointermove', handleMove);
        // }
    }, [canMove]);

    return (
        <>
            <label>
                <input 
                    type="checkbox" 
                    checked={canMove}
                    onChange={(e) => setCanMove(e.target.checked)}
                />
                The dot is allowed to move
            </label>
            <hr />
            <div 
                style={{
                    position: 'absolute',
                    backgroundColor: 'pink',
                    borderRadius: '50%',
                    opacity: 0.5,
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    pointerEvents: 'none',
                    left: -20,
                    top: -20,
                    width: 40,
                    height: 40,
                }}
            />
        </>
    )
}

export default function App(){
    return (
        <Dot />
    )
}