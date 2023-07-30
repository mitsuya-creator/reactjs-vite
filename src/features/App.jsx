import React, { useState } from "react";;
import { toast } from "react-toastify";
import ShowNotification from "../components/view/notification";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button type="button" onClick={() => {
        toast.success("easy");
        setShow(!show);
      }}>Notify</button>
      {show && <ShowNotification />}

    </>
  )
}