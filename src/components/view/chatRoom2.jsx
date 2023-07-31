import React, { experimental_useEffectEvent as useEffectEvent } from "react";
import ShowNotification from "./notification";
import { useEffect, useState } from "react";
import { creatConnection } from "../../utils/chat2";

export default function ChatRoom({ roomId, isDark }) {
    const [show, setShow] = useState(false)
    const onConnected = useEffectEvent(() => setShow(true))
    useEffect(() => {
        const connection = creatConnection('http://localhost:', roomId);
        connection.on("connected", () => {
            setTimeout(() => onConnected(), 1000);
        });
        connection.connect();
        return () => connection.disconnect()
    }, [roomId]);

    return (
        <>
            <h1>Welcome to {roomId} room !</h1>
            {show && <ShowNotification msg={'welcome to '} roomId={roomId} isDark={isDark} />}
        </>
    )
}