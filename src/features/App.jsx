import React, { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react"; //use react@experimental verison

export default function App() {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1);
  const onTick = useEffectEvent(() => setCounter(c => c + increment));
  useEffect(() => {
    let counterId = setInterval(() => {
      onTick();
    }, 1000)
    return () => clearInterval(counterId);
  }, []);
  return (
    <>
      <h1>Counter: {counter} </h1>
      <button type="buton" onClick={() => setCounter(0)}>Reset</button>
      <hr />
      <span>Every second, increment by:</span>
      <button type="button" onClick={() => setIncrement(i => i - 1)} disabled={increment === 0}>-</button>
      {increment}
      <button type="button" onClick={() => setIncrement(i => i + 1)}>+</button>
    </>
  )
}