import { useContext } from "react";
import { ReducerContext } from "../../utils/taskContext";

let keyID = 0;
export default function AddButton({ text, setText }) {
    const dispatch = useContext(ReducerContext)
    return (
        <>
            <button
                type="button"
                onClick={() => {
                    dispatch({
                        type: "added",
                        id: keyID++,
                        name: text,
                        done: false
                    })
                    setText("")
                }
                }>Add Task</button >
        </>
    )
}