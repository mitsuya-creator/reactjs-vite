import FocusBtn from "../button/focus";
import { useRef } from "react";
export default function InputField() {
    const myref = useRef(null);
    const hanldeClick = () => {
        myref.current.focus();
        console.log(myref.current.attributes);
    }
    return (
        <>
            <input ref={myref} type="input" placeholder="input here" />
            <FocusBtn handler={hanldeClick} />
        </>
    )
}