import React from "react";
import { useOnlineStatus } from "../hooks/useOnline";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? " Online" : "Offline"}</h1>
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  return <button type="button" disabled={!isOnline} onClick={() => console.log("save progress")}>{isOnline ? "Save Progress" : "Reconnecting"}</button>
}


export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  )
}