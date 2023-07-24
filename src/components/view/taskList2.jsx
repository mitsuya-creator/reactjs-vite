export default function TaskList({ task }) {
    return <li className={task.completed ? 'completed' : 'nostyle'}>{task.text}</li>
}