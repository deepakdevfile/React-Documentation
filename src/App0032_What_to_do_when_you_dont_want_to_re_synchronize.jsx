
// solution 1: make the varible global 
const serverUrl = 'https://localhost:1234';
const roomId = 'general';

function ChatRoom() {
    useEffect(() => {
        // solution 2: move varibles in useEffect
        // const serverUrl = 'https://localhost:1234';
        // const roomId = 'general';
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, []);
}

export default function App() {
    return (
        <ChatRoom />
    )
}