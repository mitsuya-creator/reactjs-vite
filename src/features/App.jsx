import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export default function App() {
  const [delay, setDelay] = useState(1000)
  const counter = useCounter(1, delay);

  return (
    <>
      <label>
        Tick duration: {delay} ms:
        <input
          type="range"
          min="1000"
          max="3000"
          value={delay}
          onChange={e => setDelay(e.target.value)}
        />
      </label>
      <hr />
      <h1>Tick : {counter}</h1>
    </>
  )
}