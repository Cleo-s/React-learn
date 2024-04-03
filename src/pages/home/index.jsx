import React from "react";
import { useState, useEffect, useContext } from "react";

import Button from "../../components/DefaultComponents/Button";
import { Status } from "../../enum/status";
import { ThemeContext } from "../../components/OneTimeComponents/ThemeContext";
import TaskList from "../../components/MainComponents/TaskList/index";
import TaskCreate from "../../components/TaskCreate/index";

import "./home.css";

function Home() {
  const storedTasks = JSON.parse(sessionStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [taskTitle, setNewTask] = useState("");
  const [theme, setTheme] = useState('light');
  const currentTheme = useContext(ThemeContext);

  const themeToggler = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

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
    <main className={`${currentTheme? currentTheme : ""}-theme`}>
      <TaskCreate
        taskTitle={taskTitle}
        handleTaskAdd={handleTaskAdd}
        setNewTask={setNewTask}
      />

      <ThemeContext.Provider value={currentTheme}>
        <Button
          onClick={themeToggler}
          label={"Change Theme"}
          className={"theme-changer-button"}
        />
      </ThemeContext.Provider>

      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}

export default Home;
