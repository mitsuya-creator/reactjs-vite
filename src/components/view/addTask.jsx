import AddButton from "../button/add"
import { useState } from "react"
export default function FormAddTask() {
    const [text, setText] = useState("");
    return (
        <>
            <input
                type="text"
                value={text}
                placeholder="Add Task"
                onChange={e => setText(e.target.value)}
            />
            <AddButton text={text} setText={setText} />
        </>
    )
}