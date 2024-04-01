import React from "react";
import { useState, useEffect, useContext } from "react";

import { Status }  from "../../enum/status";
import { ThemeContext } from "../../components/ThemeContext";
import TaskList from "../../components/TaskList/index";
import TaskCreate from "../../components/TaskCreate/index";

import "./home.css";

function Home() {
  const storedTasks = JSON.parse(sessionStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [taskTitle, setNewTask] = useState("");
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (tasks.length > 0)
      sessionStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskAdd = () => {
    if (taskTitle.length === 0) return;
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        checked: true,
        status: Status.new,
        label: taskTitle,
        date: new Date(),
      },
    ]);
    setNewTask("");
  };

  return (
    <main className={"home-main"}>
      <TaskCreate
        taskTitle={taskTitle}
        handleTaskAdd={handleTaskAdd}
        setNewTask={setNewTask}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}

export default Home;
