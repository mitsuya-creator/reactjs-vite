import React, { useEffect, experimental_useEffectEvent as useEffectEvent } from "react";
import { createEncryption, createUnEncryption } from "../../utils/chat4";

export default function ChatRoom({ roomId, isEncrypted, onMessage }) {
    const onReceiveMessage = useEffectEvent(onMessage);

    useEffect(() => {
        const createConnection = () => {
            const options = {
                serverUrl: 'localhost:678',
                roomId: roomId
            }
            if (isEncrypted) {
                return createEncryption(options)
            } else {
                return createUnEncryption(options)
            }
        }

        const connection = createConnection();
        connection.on("message", (msg) => onReceiveMessage(msg));
        connection.connect()
        return () => connection.disconnect();

    }, [roomId, isEncrypted])

    return <h1>Welcome to {roomId}</h1>
}