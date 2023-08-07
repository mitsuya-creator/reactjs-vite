import { useEffect, experimental_useEffectEvent as useEffectEvent } from "react";
import { createEncryption, createUnEncryption } from "../utils/chat4";

export function useChatRoom(roomId, isEncrypted, onMessage) {
    const onReceiveMessage = useEffectEvent(onMessage);
    useEffect(() => {
        const createConnection = () => {
            const options = {
                serverUrl: "localhost:6777",
                roomId: roomId
            }
            if (isEncrypted) {
                return createEncryption(options)
            } else {
                return createUnEncryption(options)
            }
        }
        const connection = createConnection()
        connection.connect();
        connection.on("message", msg => onReceiveMessage(msg))
        return () => connection.disconnect();
    }, [roomId, isEncrypted])
}