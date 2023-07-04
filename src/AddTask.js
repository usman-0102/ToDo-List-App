import React from "react";

const AddTask = ({newTask,setNewTask,addTask,newTaskdes,setNewTaskdes}) => {
    return(
         <>
         <div className="bg-blue-400">
        <div>
        <div> <label className="font-bold	">Add Task Title</label> </div>

      <input placeholder='Add task' value={newTask} className="rounded-md shadow-sm w-9/12 p-2 mb-2 shadow-black	"
      onChange={(e)=> setNewTask(e.target.value)}/>
       </div> 
       <div>
       <div> <label className="font-bold	" >Add Description</label> </div>
        <input placeholder='Add task description' value={newTaskdes} className=" rounded-md w-9/12 p-2 mb-5 shadow-sm shadow-black"
      onChange={(e)=> setNewTaskdes(e.target.value)}/>
     </div>
     <div>
      <button onClick={addTask} className="p-2 bg-blue-500 mb-9 rounded-md font-bold	" >Add Task</button>
     </div>
     </div>
      </>
    )
}

export default AddTask;