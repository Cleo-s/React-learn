import React from "react";
import { useState } from "react";

import Input from "../Input/index";
import Button from "../Button/index";
import TrashBinIcon from "../Icons/TrashBinIcon";

import "./TaskList.css";

function TaskList({ tasks, setTasks }) {
   const [checkedTask, setCheckedTask] = useState(false);

   const handleTaskDelete = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
   };

   const handleTaskCheck = () => {
      setCheckedTask(!checkedTask);
   };

   return (
      <section className="tasks-section">
         <ul className="tasks-table">
            {tasks.map((task, index) => (
               <li key={index}>
                  <Input type="checkbox" onChange={handleTaskCheck} />
                  <p className="task-label">{task}</p>
                  <Button
                     className="delete-task-button"
                     onClick={() => handleTaskDelete(index)}
                     icon={<TrashBinIcon />}
                  />
               </li>
            ))}
         </ul>
      </section>
   );
}

export default TaskList;
