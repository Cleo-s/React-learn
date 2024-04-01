import React from "react";
import { useState, useEffect } from "react";

import Input from "../../Input/index";
import DropDown from "../../DropDown/index";

import "./Task.css";

import TrashBinIcon from "../../Icons/TrashBinIcon/index";
import { IconedButton } from "../../IconedButton";
import { Divider } from "../../Divider";

function Task({ tasks, setTasks, index, task }) {
  const [openedDropDown, setOpenedDropDown] = useState(false);

  useEffect(() => {
    console.log(task.checked);
  }, [task]);

  const handleTaskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskCheck = () => {
    let targetTask = tasks.find((taskObj) => taskObj.id === task.id);
    let targetTaskIndex = tasks.findIndex((taskObj) => taskObj.id === task.id);
    targetTask = { ...targetTask, checked: !targetTask.checked };
    const updatedTasks = [...tasks];
    updatedTasks[targetTaskIndex] = targetTask;
    setTasks(updatedTasks);
  };

  return (
    <section
      className="task-section"
      style={{ marginBottom: openedDropDown ? "4.75rem" : "0rem" }}
    >
      <li key={index} className={`task ${!task.checked ? "task-checked" : ""}`}>
        <Input
          type="checkbox"
          checked={task.checked}
          onChange={handleTaskCheck}
        />
        <p className="task-label">{task.label}</p>
        <Divider axis={"y"} />
        <DropDown
          openedDropDown={openedDropDown}
          setOpenedDropDown={setOpenedDropDown}
          tasks={tasks}
          task={task}
        />

        <Divider axis={"y"} />
        <IconedButton
          onClick={() => handleTaskDelete(index)}
          icon={<TrashBinIcon />}
          classname={"delete-task-button"}
        />
      </li>
    </section>
  );
}

export default Task;
