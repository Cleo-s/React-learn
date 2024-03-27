import React from "react";
import { useState } from "react";

import Input from "../../Input/index";
import DropDown from "../DropDown/index";

import "./Task.css";

import TrashBinIcon from "../../Icons/TrashBinIcon/index";
import { IconedButton } from "../../IconedButton";
import { Divider } from "../../Divider";

function Task({ tasks, setTasks, index, task }) {
  const [checkedTask, setCheckedTask] = useState(false);
  const [openedDropDown, setOpenedDropDown] = useState(false);

  const handleTaskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskCheck = () => {
    setCheckedTask(!checkedTask);
  };

  return (
    <section
      className="task-section"
      checkedTask={checkedTask}
      style={{ marginBottom: openedDropDown ? "4.75rem" : "0rem" }}
    >
      <li key={index} className={`task ${checkedTask ? "task-checked" : ""}`}>
        <Input
          type="checkbox"
          checked={checkedTask}
          onChange={handleTaskCheck}
        />
        <p className="task-label">{task}</p>
        <Divider axis={"y"} />
        <DropDown
          openedDropDown={openedDropDown}
          setOpenedDropDown={setOpenedDropDown}
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
