// All variables declared in the component body are reactive
// React verifies that you specified every reactive value as a dependency
// 

function ChatRoom(){
    const settings = useContext(SettingContext);
    const serverUrl = selectedServerUrl ?? settings.defaultServerUrl;
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return() => {
            connection.disconnect();
        };
    }, [roomId, serverUrl]);
}

export default function App(){
    return(
        <ChatRoom />
    )
}