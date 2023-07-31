import React, { experimental_useEffectEvent as useEffectEvent } from "react";
import ShowNotification from "./notification";
import { useEffect, useState } from "react";
import { creatConnection } from "../../utils/chat2";

export default function ChatRoom({ roomId, isDark }) {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState("");
    const onConnected = useEffectEvent(() => setShow(true))
    useEffect(() => {
        let ignore = false;
        let timeout;
        setMessage(null);
        const connection = creatConnection('http://localhost:', roomId);
        try {
            connection.on("connected", () => {
                timeout = setTimeout(() => {
                    if (!ignore) setMessage(`Welcome to ${roomId}`);
                    onConnected()
                }, 1000)
            });
            connection.connect();
        } catch (e) {
            console.log(e.message);
            setMessage(e.message);
            setTimeout(() => onConnected(), 1000);
        }
        return () => {
            ignore = true;
            clearTimeout(timeout);
            connection.disconnect();
        }

    }, [roomId]);

    return (
        <>
            <h1>Welcome to {roomId} room !</h1>
            {show && <ShowNotification msg={message} isDark={isDark} roomId={roomId} />}
        </>
    )
}