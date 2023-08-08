import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useInterval } from "../hooks/useInterval";

export default function App() {
  const counter = useCounter(1, 1000);

  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
    document.body.style.backgroundColor = randomColor;
  }, 2000)

  return (
    <>
      <h1>Tick : {counter}</h1>
    </>
  )
}