import React from "react";
import { useCounter } from "../hooks/useCounter";

export default function App() {
  const counter = useCounter(1);
  return <h1>Second passed : {counter}</h1>
}