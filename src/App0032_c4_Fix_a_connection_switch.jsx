import { useEffect, useState } from "react";

function createEncryptedConnection(roomId){
    return {
        connect(){
            console.log('✅ 🔐 Connecting to "' + roomId + '... (encrypted)');
        },
        disconnect(){
            console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
        }
    };
}

function createUnencryptedConnection(roomId){
    return{
        connect(){
            console.log('✅ Connecting to "' + roomId + '... (unencrypted)');
        },
        disconnect(){
            console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
        }
    };
}

// solution 1
function ChatRoom1({roomId, createConnection }){
    useEffect(() => {
        const connection = createConnection(roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, createConnection])
    return <h1>Welcome to the {roomId} room!</h1>
}

// solution 2
function ChatRoom2({roomId, isEncrypted}){
    useEffect(() => {
        const createConnection = isEncrypted ? createEncryptedConnection : createUnencryptedConnection;
        const connection = createConnection(roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, isEncrypted])
    return <h1>Welcome to the {roomId} room!</h1>
}

export default function App(){
    const [roomId, setRoomId] = useState('general');
    const [isEncrypted, setIsEncrypted] = useState(false);

    return(
        <>
            <label>
                Choose the chat room: {' '}
                <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <br />
            <label >
                <input 
                    type="checkbox" 
                    checked={isEncrypted}
                    onChange={(e) => setIsEncrypted(e.target.checked)}
                />
                Enable encryption
            </label>
            <hr />
            {/* <ChatRoom1 
                roomId={roomId}
                createConnection={isEncrypted ? createEncryptedConnection : createUnencryptedConnection }
            /> */}
            <ChatRoom2 
                roomId={roomId}
                isEncrypted={isEncrypted}
            />
        </>
    )
}