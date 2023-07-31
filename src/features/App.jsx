import React, { useState } from "react";
import ChatRoom from "../components/view/chatRoom2";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <label>
        Choose the chat room:
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value={"general"}>general</option>
          <option value={"travel"}>travel</option>
          <option value={"music"}>music</option>
        </select>
      </label>
      <br />
      <label>
        <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)} /> use dark theme
      </label>
      <hr />
      <ChatRoom roomId={roomId} isDark={isDark} />
    </>
  )
}