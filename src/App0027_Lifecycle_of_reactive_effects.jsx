import { useEffect, useState } from 'react';

const serverUrl = 'https://localhost:1234';

function createConnection(serverUrl, roomId){
    return{
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect(){
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}

function ChatRoom({roomId}){
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return() => connection.disconnect();
    }, [roomId]);

    return(
        <h1>Welcome to the {roomId} room!</h1>
    )
}

export default function App(){
    const [roomId, setRoomId] = useState('general');
    return(
        <>
            <label>Choose the chat room: {' '}
                <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                    <option value="general">general</option>
                    <option value="music">music</option>
                    <option value="travel">travel</option>
                </select>
            </label>
            <hr />
            <ChatRoom roomId={roomId}/>
        </>
    )
}