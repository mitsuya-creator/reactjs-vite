import React, { useState } from "react";
import "../css/App.css";
import ChatRoom from "../components/view/chatRoom3";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [roomId, setRoomId] = useState("general");
  const [serverUrl, setServerUrl] = useState("localhost:345");

  return (
    <div className={isDark ? "black" : "light"}>
      <button type="button" onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
      <br />
      <label>
        Server Url :
        <input type="text" value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
      </label>
      <br />
      <label>
        choose the chat room :
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="music">music</option>
          <option value="travel">travel</option>
        </select>
      </label>
      <hr />
      <ChatRoom serverUrl={serverUrl} roomId={roomId} />
    </div>
  )
}