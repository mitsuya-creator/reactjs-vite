import { useEffect } from "react";
import { createConnection } from "../../utils/chat3";

export default function ChatRoom({ serverUrl, roomId }) {
    useEffect(() => {
        const connection = createConnection({
            serverUrl: serverUrl,
            roomId: roomId
        });
        connection.connect()
        return () => connection.disconnect();
    }, [serverUrl, roomId])

    return <h1>Welcome to {roomId} room!</h1>
}