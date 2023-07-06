import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faTrash } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({toDo,setUpdateData,deleteTask}) => {
    return(
        <>
 {toDo && toDo.map((task) => {
          return (
            <React.Fragment key={task.id}>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl pb-3 mb-16">
              <div className="border-2 border-blue-800	 bg-gradient-to-r from-teal-600 to-sky-800 w-2/3 
              justify-center m-auto shadow-2xl rounded-2xl">
                <div className="font-bold  mt-2 text-2xl">{task.title}</div>
                <div className="pl-2 mt-2 pr-2 m-0 font-bold">{task.des}</div>
             
                <span>
                  <button className="p-2 bg-gradient-to-r from-green-400 to-green-600  mb-9 rounded-md font-bold	m-5"
                    onClick={() =>
                      setUpdateData({
                        id: task.id,
                        title: task.title,
                        des:task.des
                      })
                    }
                  >
                      Edit
                    <FontAwesomeIcon icon={faPen} className="ml-5"/>
                  
                  </button>
                </span>
                <span>
                  <button onClick={() => deleteTask(task.id)} className="p-2 bg-gradient-to-r from-red-500 to-red-700  mb-9 rounded-md font-bold	mr-1	">Delete
                  <FontAwesomeIcon icon={faTrash} className="ml-5"/>
                  </button>
                </span>
              </div>
              
              </div>
            </React.Fragment>
          );
        })}</>
    )
}
export default ToDo;
