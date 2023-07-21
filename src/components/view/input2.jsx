import React, { forwardRef, useRef, useImperativeHandle } from "react"
export const InputField = forwardRef((props, ref) => {
    const myref = useRef(null);
    useImperativeHandle(ref, () => ({
        focus() {
            myref.current.focus();
        }
    }))
    return <input type="text" {...props} ref={myref} />
})

