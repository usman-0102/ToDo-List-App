import React from "react";

const ToDo = ({toDo,setUpdateData,deleteTask}) => {
    return(
        <>
 {toDo && toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="bg-blue-400 rounded-xl pb-9">
              <div>
              <div className="bg-blue-500 w-2/3 justify-center m-auto shadow-2xl ">
                <div className="font-bold">{task.title}</div>
                <div>{task.des}</div>
             
                <span>
                  <button className="p-2 bg-green-500 mb-9 rounded-md font-bold	m-5"
                    onClick={() =>
                      setUpdateData({
                        id: task.id,
                        title: task.title,
                      })
                    }
                  >
                    Edit
                  </button>
                </span>
                <span>
                  <button onClick={() => deleteTask(task.id)} className="p-2 bg-red-500 mb-9 rounded-md font-bold	mr-1	">Delete</button>
                </span>
              </div>
              </div>
              </div>
            </React.Fragment>
          );
        })}</>
    )
}
export default ToDo;
