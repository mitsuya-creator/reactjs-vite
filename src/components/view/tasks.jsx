import TaskList from "./taskList"

export default function Tasks({ tasks, dispatch }) {
    return (
        <ul>
            {tasks.map(t => <TaskList key={t.id} task={t} dispatch={dispatch} />)}
        </ul>
    )
}