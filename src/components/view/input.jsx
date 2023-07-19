import FocusBtn from "../button/focus";
import { useRef, forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
    return <input type="text" {...props} ref={ref} />
})
export default function InputField() {
    const myref = useRef(null);
    const hanldeClick = () => {
        myref.current.focus();
        console.log(myref.current.attributes);
    }
    return (
        <>
            <MyInput ref={myref} />
            <FocusBtn handler={hanldeClick} />
        </>
    )
}