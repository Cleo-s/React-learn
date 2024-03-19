import React from "react";

import Task from "./Task/index";

import "./TaskList.css";

function TaskList({ tasks, setTasks }) {
  return (
    <section className="tasks-section">
      <ul className="tasks-table">
        {tasks.map((task, index) => (
          <Task task={task} index={index} tasks={tasks} setTasks={setTasks} />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
