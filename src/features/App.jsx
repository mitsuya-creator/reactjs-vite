import React, { useRef } from "react";
import { InputField } from "../components/view/input2";
import FocusBtn from "../components/button/focus2";
export default function App() {
  const myref = useRef(null);
  const handleClick = () => {
    myref.current.focus();
  }
  return (
    <>
      <InputField ref={myref} />
      <FocusBtn handle={handleClick} />
    </>
  )
}