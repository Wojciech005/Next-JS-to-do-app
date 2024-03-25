"use client";
import Form from "@/components/Form";
import Tasks from "@/components/tasks/tasks";
import { useState } from "react";

const TASKS = [
  {
    id: 1,
    title: "Plan, schedule, and manage meetings",
    date: "2024-05-23",
    completed: false,
    isEditing: false
  },
  {
    id: 2,
    title: " Manage your personal calendar",
    date: "2024-07-2",
    completed: false,
    isEditing: false
  },
  {
    id: 3,
    title: "Read a book",
    date: "2024-03-031",
    completed: false,
    isEditing: false
  },
  {
    id: 4,
    title: "Organize online documents",
    date: "2024-06-02",
    completed: false,
    isEditing: false
  },
  {
    id: 5,
    title: "Answer emails",
    date: "2024-06-02",
    completed: false,
    isEditing: false
  },
  {
    id: 6,
    title: "Check voicemail",
    date: "2024-06-02",
    completed: false,
    isEditing: false
  },
  {
    id: 7,
    title: "Book flights, hotels, and rental cars",
    date: "2025-06-02",
    completed: false,
    isEditing: false
  }
];

export default function Home() {
  const [tasks, setTasks] = useState(TASKS);

  function newTask(task) {
    setTasks([...prevState, task]);
  }

  function newTask(tasks) {
    setTasks((prevTask) => {
      return [tasks, ...prevTask];
    });
  }

  function onDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }


function toggleCompleted(id){
  setTasks(tasks.map(task => {
    if(task.id === id) {
      return {...task, completed: !task.completed}
    } else {
      return task;
    }
  }))
}


  return (
    <main className="flex min-h-screen  justify-center p-4">
      <div className="container pt-8">
      <h1 className="text-3xl font-mono text-center">Let's do it!</h1>
      <Form newTask={newTask} tasks={tasks} />
      <Tasks tasks={tasks} onDelete={onDeleteTask}  toggleCompleted={toggleCompleted} />
      </div>
    </main>
  );
}
