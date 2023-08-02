import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("creating interval");
    let interval = setInterval(() => setCount(c => c + 1), 1000);
    return () => {
      console.log("clear interval");
      clearInterval(interval);
    }
  }, [])

  return (
    <>
      {count}
    </>
  )
}