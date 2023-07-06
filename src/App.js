import React from "react";
import { useState } from "react";
import "./App.css";
import AddTask from "./AddTask.js";
import UpdateTask from "./UpdateTask.js";
import ToDo from "./ToDo.js";
import clock from "./clock.png"
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
    else{
      alert("Please Enter Task Title to Add");
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
      des: updateData.des
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
    <div className="App  items-center bg-gradient-to-r from-cyan-500 to-blue-600 w-1/2 justify-center m-auto mt-16 rounded-xl">
      <h1 className="p-6 pb-0 text-3xl font-bold ">ToDo List App</h1>
      <br />
      <img src={clock} alt="clock" className="justify-center m-auto w-32" />
      <br/>
      {updateData && updateData ? (
        <UpdateTask
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
        />
      ) : (
        <AddTask 
        newTask={newTask} 
        setNewTask={setNewTask} 
        addTask={addTask} 
        setNewTaskdes={setNewTaskdes} 
        newTaskdes={newTaskdes}/>
      )}
       <ToDo toDo={toDo}
       setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        />

    </div>
  );
}

export default App;
