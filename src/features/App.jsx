import React, { useState } from "react";
import ChatRoom from "../components/view/chatRoom3";
import { showNotification } from "../utils/notification";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <label>
        Choose the chat room : {""}
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <label>
        <input type="checkbox" checked={isEncrypted} onChange={e => setIsEncrypted(e.target.checked)} /> Enable Encryption
      </label>
      <br />
      <label>
        <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)} /> Enable dark mode
      </label>
      <br />
      <ChatRoom
        roomId={roomId}
        isEncrypted={isEncrypted}
        onMessage={msg => showNotification(`New message: ${msg}`, isDark)}
      />
    </>
  )
}