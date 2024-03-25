"use client";
import { useState } from "react";

export default function Form({newTask, editTask}) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  
  function taskTitleHandler(e) {
    setTaskTitle(e.target.value);
  }
  
  function taskDateHandler(e) {
    setTaskDate(e.target.value);
  }

  function taskHandler(e) {
    e.preventDefault();

    if(taskTitle.length === 0) {
      setIsCorrect(true)
      return
    } else {
      setIsCorrect(false)
      const tasks = {
        id: Math.floor(Math.random() * 1000),
        title: taskTitle,
        date: taskDate
    };
    newTask(tasks)
    }
    setTaskTitle('')
}


  return (
    <>
      <form className="w-full flex flex-wrap md:flex-nowrap my-6 justify-between" onSubmit={taskHandler}>
        <div className="flex w-full flex-wrap md:flex-nowrap md:w-9/12 justify-between">
          <div className="w-full md:w-7/12 me-0 md:me-4">
          <input type="text" className="p-3 h-14 rounded shadow-xl me-0 md:me-3 w-full" onChange={taskTitleHandler} placeholder="Add task" value={taskTitle}/>
          {isCorrect && <p className="text-red-500">Task must be longer than 2 letters!</p>}
          </div>
          <div className="w-full md:w-7/12 my-4 md:my-0">
          <input type="date" className="w-full p-3  h-14 rounded shadow-xl me-3" onChange={taskDateHandler} />
          </div>
        </div>
        <div className="w-full md:w-2/12">
          <button
            type="submit"
            className="w-full h-14  bg-red-500  p-3 rounded shadow-xl text-white"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
}
