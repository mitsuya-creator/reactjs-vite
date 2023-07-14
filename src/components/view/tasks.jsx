import { useContext } from "react";
import { TaksContext } from "../../utils/taskContext";
import TaskList from "./taskList";

export default function Tasks() {
    const tasks = useContext(TaksContext);
    return (
        <ul>
            {tasks.map(t => <li key={t.id}> <TaskList task={t} /> </li>)}
        </ul>
    )
}