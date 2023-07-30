import React, { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react"; //use react@experimental verison

export default function App() {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [delay, setDelay] = useState(100);
  const onTick = useEffectEvent(() => setCounter(c => c + increment));
  useEffect(() => {
    let counterId = setInterval(() => {
      onTick();
    }, delay)
    return () => clearInterval(counterId);
  }, [delay]);
  return (
    <>
      <h1>Counter: {counter} </h1>
      <button type="buton" onClick={() => setCounter(0)}>Reset</button>
      <hr />
      <span>Every second, increment by:</span>
      <button type="button" onClick={() => setIncrement(i => i - 1)} disabled={increment === 0}>-</button>
      <b style={{ fontSize: 24, margin: 20 }}>{increment}</b>
      <button type="button" onClick={() => setIncrement(i => i + 1)}>+</button>
      <br />
      <span>Increment delay: <button type="button" style={{ fontSize: 16 }} onClick={() => setDelay(d => d - 100)}>-{100}</button>
      </span>
      <b style={{ fontSize: 16, marginLeft: 10 }}>{delay} ms</b>
      <br />
      <button type="button" style={{ fontSize: 16 }} onClick={() => setDelay(d => d + 100)}>+{100}</button>
    </>
  )
}