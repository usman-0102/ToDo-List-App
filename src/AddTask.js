import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTask = ({
  newTask,
  setNewTask,
  addTask,
  newTaskdes,
  setNewTaskdes,
}) => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600">
        <div>
          <div className="mb-2 text-left pl-9">
            <label className="font-bold">Add Task Title:</label>{" "}
          </div>

          <input
            placeholder="Add task"
            value={newTask}
            className="rounded-md shadow-sm w-9/12 p-2 mb-2 shadow-black"
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div>
        <div className="mb-2 text-left pl-9">
            <label className="font-bold	">Add Description:</label>{" "}
          </div>
          <input
            placeholder="Add task description"
            value={newTaskdes}
            className=" rounded-md w-9/12 p-2 mb-5 shadow-sm shadow-black"
            onChange={(e) => setNewTaskdes(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={addTask}
            className="p-2  bg-gradient-to-r from-cyan-800 to-blue-900 hover:from-pink-500 hover:to-yellow-500 mb-9 rounded-md font-bold"
          >
            Add Task
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
