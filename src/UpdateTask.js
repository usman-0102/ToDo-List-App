import React from "react";

const UpdateTask = ({updateData,changeTask,updateTask})=>{
    return(
<>
<div>
<input placeholder='update task Title' value={updateData && updateData.title}   className=" rounded-md w-9/12 p-2 mb-5 shadow-sm shadow-black"
onChange={(e)=> changeTask(e)}/>

</div>
<div>
<button onClick={updateTask} className="p-2 bg-gradient-to-r from-cyan-800 to-blue-900 mb-9 rounded-md font-bold	">Update Task</button>
</div>
</>
    )
}
export default UpdateTask;