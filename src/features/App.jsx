import React, { useState, useMemo } from "react";
import { db } from "../assets/data/db";
import TaskList from "../components/view/taskList2";
import AddButton from "../components/button/add2";
import "../css/App.css"

export default function App() {
  const [tasks, setTasks] = useState(db);
  const [text, setText] = useState("")
  const [activeTodos, setActiveTodos] = useState(false);
  const leftTask = useMemo(() => {
    console.log(tasks);
    return tasks.filter(task => task.completed != true);
  }, [activeTodos, tasks])
  const result = activeTodos ? leftTask : tasks;
  return (
    <>
      <p>
        <input type="checkbox" checked={activeTodos} onChange={e => setActiveTodos(e.target.checked)} />
        Show only active todos
      </p>
      <input type="text" value={text} placeholder="Add task here" onChange={e => setText(e.target.value)} />
      <AddButton task={tasks} setTask={setTasks} text={text} setText={setText} />
      <ul>
        {result.map(task => <TaskList task={task} key={task.id} />)}
      </ul>
      <span>{leftTask.length} todos left</span>
    </>
  )
}