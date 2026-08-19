import { useState, useRef, useEffect } from "react";

function VideoPlayer({isPlaying, src}){
    const ref = useRef(null);

    useEffect(() => {
        if(isPlaying){
            console.log('Calling video.play()');
            ref.current.play();
        } else{
            console.log('Calling video.pause()');
            ref.current.pause();
        }
    }, [isPlaying]);

    return <video src={src} ref={ref} loop playsInline />
}

export default function App(){
    const [text, setText] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <>
            <input type="text" onChange={(e) => setText(e.target.value)} />
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