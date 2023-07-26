import React, { useState } from "react";
import InputField from "../components/view/input3";
import OpenChat from "../components/button/openChat";

export default function App() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("")
  return (
    <>
      {show ? <OpenChat openToChat={(e) => {
        e.preventDefault();
        setShow(!show)
      }} /> :
        <InputField text={text} setText={setText} send={(e) => {
          e.preventDefault();
          setShow(!show);
          setText("");
          console.log(`sending....${text}`)
        }} />
      }
    </>
  )
}