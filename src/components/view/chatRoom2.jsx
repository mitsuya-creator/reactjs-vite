import React, { experimental_useEffectEvent as useEffectEvent } from "react";
import { showNotification } from "../../utils/notification"
import { useEffect } from "react";
import { creatConnection } from "../../utils/chat2";

export default function ChatRoom({ roomId, isDark }) {
    const onConnected = useEffectEvent((e) => showNotification(e, isDark));
    useEffect(() => {

        const connection = creatConnection('http://localhost:', roomId);
        try {
            connection.on("connecte", () => {
                setTimeout(() => {
                    onConnected(`Welcome to ${roomId}`);
                }, 1000)
            });
            connection.connect();
        } catch (e) {
            setTimeout(() => onConnected(e.message), 1000);
        }
        return () => {
            connection.disconnect();
        }

    }, [roomId]);
    return <h1>Welcome to {roomId} room !</h1>
}
