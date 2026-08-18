import { useState, useEffect } from "react";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


const serverUrl = 'https://localhost:1234';

function showNotification(message, theme){
    Toastify({
        text: message,
        duration: 4000,
        gravity: 'top',
        position: 'right',
        style: {
            color: theme === 'dark' ? 'white' : 'black',
            background: theme === 'dark' ? 'black' : 'white',
        },
    }).showToast();
}

function createConnection(serverUrl, roomId){
    let connectedCallback;
    let timeout;
    return{
        connect(){
            timeout = setTimeout(() => {
                if(connectedCallback){
                    connectedCallback();
                }
            }, 1000);
        },
        on(event, callback){
            if(connectedCallback){
                throw Error('Cannot add the handler twice.');
            }
            if(event !== 'connected'){
                throw Error('Only "connected" event is supported. ')
            }
            connectedCallback = callback;
        },
        disconnect(){
            clearTimeout(timeout);
        }
    };
}

function ChatRoom({roomId, theme}){
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on('connected', () => {
            showNotification('Connected!', theme);
        })
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return(
        <>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    )
}

export default function App(){
    const [roomId, setRoomId] = useState('general');
    const [isDark, setIsDrak] = useState(false);
    return(
        <>
            <label>
                Choose the chat room: {' '}
                <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                    <option value="general">general</option>
                    <option value="music">music</option>
                    <option value="travel">travel</option>
                </select>
            </label>
            <br />
            <label >
                <input type="checkbox" checked={isDark} onChange={(e) => setIsDrak(e.target.checked)}/>
                Use dark theme
            </label>
            <hr />
            <ChatRoom roomId={roomId} theme ={isDark ? 'dark' : 'light' }/>
        </>
    );
}