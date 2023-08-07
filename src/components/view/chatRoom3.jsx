import React from "react";
import { useChatRoom } from "../../hooks/useChatRoom";

export default function ChatRoom({ roomId, isEncrypted, onMessage }) {
    useChatRoom(roomId, isEncrypted, onMessage);
    return <h1>Welcome to {roomId}</h1>
}