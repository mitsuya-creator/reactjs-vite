import React from "react";
import reducer from "../utils/reducer";
import { useReducer } from "react";
import { TaksContext, ReducerContext } from "../utils/taskContext";
import FormAddTask from "../components/view/addTask";
import Tasks from "../components/view/tasks";
import "../css/App.css"

const initialState = [];

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  console.log(tasks)
  return (
    <>
      <TaksContext.Provider value={tasks}>
        <ReducerContext.Provider value={dispatch}>
          <FormAddTask />
          {/* <Tasks /> */}
        </ReducerContext.Provider>
      </TaksContext.Provider>
    </>
  )
}