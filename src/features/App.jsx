import React, { useState } from "react";
import ChatRoom from "../components/view/chatRooms";

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [encryption, setEncryption] = useState(false);

  return (
    <>
      <label>
        choose the chat room {''}
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="game">game</option>
          <option value="travel">travel</option>
        </select>
      </label>
      <br />
      <label>
        <input type="checkbox" checked={encryption} onChange={e => setEncryption(e.target.checked)} />
        Enable encryption
      </label>
      <hr />
      <ChatRoom encryp={encryption} roomId={roomId} />
    </>
  )
}