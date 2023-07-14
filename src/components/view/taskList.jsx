import { useState, useContext } from "react";
import { ReducerContext } from "../../utils/taskContext";

export default function TaskList({ task }) {
    const dispatch = useContext(ReducerContext);
    const [isEdit, setIsEdit] = useState(false);
    let content;
    if (isEdit) {
        content = <>
            <input type="text" value={task.name} onChange={e => dispatch({
                type: "changed",
                task: {
                    ...task,
                    name: e.target.value
                }
            })} />
            <button type="button" onClick={() => setIsEdit(false)}> Save</button>
        </>
    } else {
        content = <>
            {task.name}
            <button type="button" onClick={() => setIsEdit(true)}>Edit</button>
        </>
    }
    return (
        <label>
            <input type="checkbox" value={task.done} onChange={e => dispatch({
                type: "changed",
                task: {
                    ...task,
                    done: e.target.checked
                }
            })} />
            {content}
            <button type="button" onClick={() => dispatch({
                type: "deleted",
                id: task.id
            })}>Deleted</button>
        </label>
    )

}