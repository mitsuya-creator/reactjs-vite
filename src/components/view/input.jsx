import FocusBtn from "../button/focus";
import { useRef, forwardRef, useImperativeHandle } from "react";

const MyInput = forwardRef((props, ref) => {
    const myRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus() {
            myRef.current.focus();
        }
    }))
    return <input type="text" {...props} ref={myRef} />
})
export default function InputField() {
    const myref = useRef(null);
    const hanldeClick = () => {
        myref.current.focus();
    }
    return (
        <>
            <MyInput ref={myref} />
            <FocusBtn handler={hanldeClick} />
        </>
    )
}