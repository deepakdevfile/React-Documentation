import { useState, useEffect } from "react";

function createConnection(serverUrl, roomId) {
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}

const serverUrl = 'https://localhost:1234';
const roomId = 'general';

function ChatRoom() {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, []);
    return (
        <>
            <label>
                Server URL:{' '}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                />
            </label>
            <h1>Welcome to the{roomId} room!</h1>
        </>
    );
}

export default function App() {
    const [show, setShow] = useState(false);
    const [roomId, setRoomId] = useState('general');
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>
            {show && <hr />}
            {show && <ChatRoom/>}
        </>
    )
}