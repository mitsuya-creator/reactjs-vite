import React, { useEffect } from "react";
import { encrypConnection, unEncrypConnection } from "../../utils/chat";

export default function ChatRoom({ encryp, roomId }) {
    useEffect(() => {
        const createConnection = encryp ? encrypConnection : unEncrypConnection;
        const connection = createConnection(roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [encryp, roomId])

    return <h1>Welcome to {roomId} room</h1>
}