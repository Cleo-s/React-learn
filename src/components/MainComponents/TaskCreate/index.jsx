import React from "react";

import "./TaskCreate.css";

import Button from "../DefaultComponents/Button/index";
import Input from "../DefaultComponents/Input/index";
import AddTaskIcon from "../Icons/AddTaskIcon";

function TaskCreate({ taskTitle, setNewTask, handleTaskAdd }) {
   return (
      <section className="task-create-section">
         <Input
            type="text"
            placeholder="Write your task"
            className="to-do-input"
            value={taskTitle}
            onChange={(e) => setNewTask(e.target.value)}
         />

         <Button
            icon={<AddTaskIcon />}
            className="add-task-button"
            onClick={handleTaskAdd}
         />
      </section>
   );
}

export default TaskCreate;
