import { useState } from "react";
import CheckboxPage from "../checkbox";

export default function Tasks({
  onDelete,
  tasks,
  isTaskDone,
  toggleCompleted,
}) {



  return (
    <>
      {tasks.length === 0 && (
        <h2 className="text-2xl text-center my-4  bg-red-500/50 text-white p-4 rounded shadow-xl">
          There is nothing to do!
        </h2>
      )}

      <ul className="">
        {tasks.map((task) => (
          <li
            className={`flex justify-between  items-center  mb-4 py-4 px-3 rounded shadow-xl  bg-slate-600/50  cursor-pointer  ${
              task.completed && "line-through text-white"
            }`}
            key={task.id}
          >
            <CheckboxPage taskStatus={task.completed} />
            <div
              className="w-3/4 ps-4"
              onClick={() => toggleCompleted(task.id)}
            >
              <h3 className="text-xl me-10 text-white font-mono">
                {task.title}
              </h3>
              <p className="text me-10 text-white font-mono">{task.date}</p>
            </div>
            <div className="">
              <button
                className="  bg-pink-600/75 p-3 rounded shadow-xl text-white"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
