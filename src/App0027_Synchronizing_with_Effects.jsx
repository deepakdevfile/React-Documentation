import { useState, useRef, useEffect } from "react"

function createConnection(){
    return {
        connect(){
            console.log('✅ Connecting...');
        },
        disconnect(){
            console.log('❌ Disconnected.');
        }
    };
}

function VideoPlayer({src, isPlaying}){
    const ref = useRef(null);

    useEffect(() => {
        if(isPlaying){
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying])

    return (
        <>
            <video src={src} ref={ref} loop playsInline style={{width: '300px', height: 'auto'}} ></video>
        </>
    )
}

function ChatRoom(){
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => connection.disconnect();
    }, []);

    return <h1>Welcom to the chat!</h1>;
}

export default function App(){
    const [isPlaying, setIsPlaying] = useState(false);
    return(
        <>
            <ChatRoom />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <br />
            <VideoPlayer
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                isPlaying={isPlaying}
            />
        </>
    )
}