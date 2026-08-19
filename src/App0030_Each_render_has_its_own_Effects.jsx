import { useEffect } from "react";

function ChatRoom({roomId}){

    useEffect(()=> {
        const connection = createConnection(roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return(
        <h1>Welcome to {roomId}!</h1>
    )
}


export default function App(){
    return(
        <ChatRoom roomId={"Galatic travel"}/>
    )
}