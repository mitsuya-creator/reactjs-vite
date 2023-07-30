import React, { experimental_useEffectEvent as useEffectEvent } from "react"
import ShowNotification from "./notification"
import { useEffect } from "react"
import { creatConnection } from "../../utils/chat2"

export default function ChatRoom({ roomId, theme }) {
    const onConnected = useEffectEvent(() => {
        ShowNotification("welcome to ", roomId, theme)
    })
    useEffect(() => {
        const connection = creatConnection(serverUrl, roomId);
        connection.on("connected", () => {
            setTimeout(() => onConnected(), 2000);
        });
        connection.connect();
        return () => connection.disconnect()
    }, [roomId]);

    return <h1>Welcom to {roomId} room !</h1>
}