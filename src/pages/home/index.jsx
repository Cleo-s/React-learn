import React from "react";
import { useState, useEffect, useContext } from "react";

import Footer from '../../components/Default/Footer';
import Header from '../../components/Default/Header';
import SideBar from '../../components/Main/SideBar';
//import Button from "../../components/Default/Button";
import { Status } from "../../enum/status";
import { ThemeContext } from "../../components/OneTime/ThemeContext";
import TaskList from "../../components/Main/TaskList/index";
import TaskCreate from "../../components/Main/TaskCreate";

import "./home.css";
import { Divider } from "../../components/Default/Divider";

function Home() {
  const storedTasks = JSON.parse(sessionStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [taskTitle, setNewTask] = useState("");
  //const [theme, setTheme] = useState('light');
  const currentTheme = useContext(ThemeContext);

  /*const themeToggler = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }*/

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
      <Header/>
      <Divider axis='horizontal-header'/>
      <SideBar/>

      <TaskCreate
        taskTitle={taskTitle}
        handleTaskAdd={handleTaskAdd}
        setNewTask={setNewTask}
      />

      {/*<ThemeContext.Provider value={currentTheme}>
        <Button
          onClick={themeToggler}
          label={"Change Theme"}
          className={"theme-changer-button"}
        />
  </ThemeContext.Provider>*/}

      <TaskList tasks={tasks} setTasks={setTasks} />
      <Footer/>
    </main>
  );
}

export default Home;
