import React, { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1);
  useEffect(() => {
    let counterId = setInterval(() => {
      setCounter(c => c + increment)
    }, 1000)
    return () => clearInterval(counterId);
  }, [increment]);
  return (
    <>
      <h1>Counter: {counter} </h1>
      <button type="buton">Reset</button>
      <hr />
      <span>Every second, increment by:</span>
      <button type="button" onClick={() => setIncrement(i => i - 1)} disabled={increment === 0}>-</button>
      {increment}
      <button type="button" onClick={() => setIncrement(i => i + 1)}>+</button>
    </>
  )
}