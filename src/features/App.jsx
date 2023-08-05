import React, { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [roomId, setRoomId] = useState("general");

  return (
    <>
      <label>
        <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)} />
        Use dark theme
      </label>
      <br />
      <label>
        <input type="checkbox" checked={isEncrypted} onChange={e => setIsEncrypted(e.target.checked)} />
        Enable encryption
      </label>
      <br />
      <label>
        Choose the chat room :
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="music">music</option>
          <option value="travel">travel</option>
        </select>
      </label>
      <hr />
    </>
  )
}