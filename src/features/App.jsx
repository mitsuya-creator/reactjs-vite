import React, { useState, useRef } from "react";

export default function App() {
  const [text, setText] = useState("Creat Messages Here");
  const [isSending, setIsSending] = useState(false);
  let ref = useRef(null)
  const hanldeSend = () => {
    setIsSending(true);
    ref.current = setTimeout(() => {
      alert(`${text} to Mitsuya!`);
      setIsSending(false)
    }, 3000);

  }
  const handleUndo = () => {
    clearTimeout(ref.current);
    setIsSending(false);
  }
  return (
    <>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <button type="button" onClick={hanldeSend} disabled={isSending === true}>{isSending ? "...Sending" : "Send"}</button>
      {isSending && <button type="button" onClick={handleUndo}>Undo</button>}
    </>
  )
}