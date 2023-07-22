import React, { useState } from "react";
import FocusOnMount from "../components/view/myInput";
import ShowButton from "../components/button/show";

const state = {
  text: 'Taylor',
  checked: false
}
export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <ShowButton handleShow={() => setShow(!show)} isShow={show} />
      {show &&
        <FocusOnMount initialState={state} />}
    </>
  )
}