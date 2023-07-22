import React, { useEffect, useRef, useReducer } from "react";

export default function FocusOnMount({ initialState }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const myRef = useRef(null);
    useEffect(() => {
        myRef.current.focus();
    }, [])
    return (
        <>
            <p>
                <label>
                    Enter your name: <input type="text" ref={myRef} value={state.text} onChange={e => dispatch({
                        type: "setText",
                        text: e.target.value
                    })} /><br />
                    <input type="checkbox" onChange={e => dispatch({
                        type: "setChecked",
                        checked: e.target.checked
                    })}
                    /> Make it UpperCase <br />
                    <span>hello {state.checked ? state.text.toUpperCase() : state.text.toLowerCase()}</span>
                </label>
            </p>
        </>
    )
}

const reducer = (state, action) => {
    switch (action.type) {
        case "setText": {
            return { ...state, text: action.text }
        };
        case "setChecked": {
            return { ...state, checked: action.checked }
        }
        default: {
            console.log("Unknown Action");
        }
    }
}