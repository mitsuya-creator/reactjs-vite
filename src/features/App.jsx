import React from "react";
import reducer from "../utils/reducer";
import { useReducer, useState } from "react";
import FormAddTask from "../components/view/addTask";
import Tasks from "../components/view/tasks";
import "../css/App.css"

const initialState = [];

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  console.log(tasks)
  return (
    <>
      <FormAddTask text={text} setText={setText} dispatch={dispatch} />
      <Tasks tasks={tasks} dispatch={dispatch} />
    </>
  )
}