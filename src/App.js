import React from "react";
import { useState } from "react";
import "./App.css";
import AddTask from "./AddTask.js";
import UpdateTask from "./UpdateTask.js";
import ToDo from "./ToDo.js";
function App() {
  const [toDo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState(""); //
  const [newTaskdes, setNewTaskdes] = useState(""); //
  const [updateData, setUpdateData] = useState(""); //changing data store k liye

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask , des :newTaskdes};
      setTodo([...toDo, newEntry]);
      setNewTask("");
      setNewTaskdes("");
    }
  };
  const deleteTask = (id) => {
    let afterdel = toDo.filter((task) => task.id !== id);
    setTodo(afterdel);
  };

  const changeTask = (e) => {
    let updateddata = {
      id: updateData.id,
      title: e.target.value,
    };
    setUpdateData(updateddata);
  };
  
  const updateTask = () => {
    let filterUpdate = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedDataObj = [...filterUpdate, updateData];
    setTodo(updatedDataObj);
    setUpdateData("");
  };

  return (
    <div className="App  items-center bg-blue-400 w-1/2 justify-center m-auto mt-40 rounded-xl">
      <h1 className="p-6 text-3xl font-bold underline">ToDo List App</h1>
      <br />
      {updateData && updateData ? (
        <UpdateTask
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
        />
      ) : (
        <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} setNewTaskdes={setNewTaskdes} newTaskdes={newTaskdes}/>
      )}
       <ToDo toDo={toDo}
       setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        />

    </div>
  );
}

export default App;
