import { useState } from "react";
import EditBtn from "../button/edit"
import DeleteBtn from "../button/delete"

export default function TaskList({ task, dispatch }) {
    const [isEdit, setIsEdit] = useState(false);
    let content;
    if (isEdit) {
        content = <>
            <EditBtn task={task} setIsEdit={setIsEdit} isEdit={isEdit} />
            <DeleteBtn dispatch={dispatch} taskId={task.id} />
        </>
    } else {
        content = <>
            {task.name}
            <EditBtn task={task} setIsEdit={setIsEdit} isEdit={isEdit} />
            <DeleteBtn dispatch={dispatch} taskId={task.id} />
        </>
    }
    return <li>{content}</li>
}