
import { useState, useRef, useEffect } from "react";

function VideoPlayer({src, isPlaying}){
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    });

    return (
        <>
            <video ref={ref} src={src} loop playsInline></video>
        </>
    )
}

export default function App(){
    const [isPlaying, setIsPlaying] = useState(false);
    // dont do this, count is in state, state cause rerender, rendering cause 
    // effect, effect casue state to change again and state cause rerender ans so on 
    // loop continues 
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setCount(count + 1);
    // })
    
    return(
        <>
            {/* <p>{count}</p> */}
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer 
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    )
}