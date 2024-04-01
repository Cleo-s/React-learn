import React from "react";
import { useState } from "react";


import DropDownOption from "./DropDowmOption";
import StatusUpdate from "../statusUpdate";
import { IconedButton } from "../IconedButton";
import { Status } from "../../enum/status";

import ChevronDownIcon from "../Icons/ChevronDownIcon/index";
import "./DropDown.css";

function DropDown({ openedDropDown, setOpenedDropDown, tasks, task }) {

  const dropDownButtonsOptions = [
  {label: "Pending", status: Status.pending, className: "pending-dropdown-button"}, 
  {label: "Working", status: Status.working, className: "working-dropdown-button"}, 
  {label: "Done", status: Status.done, className: "done-dropdown-button"}, 
  {label: "Cancelled", status: Status.cancelled, className: "cancelled-dropdown-button"}
]

  const handleDropDown = () => {
    setOpenedDropDown(!openedDropDown);
  };

  const handleButtonStatusChange = (currentStatus) => {
    const targetTask = tasks.find((taskObj) => taskObj.id === task.id);
    targetTask.status = currentStatus;
    setOpenedDropDown(false);
  };

  return (
    <div className="dropdown-div">
      <IconedButton
        icon={<ChevronDownIcon />}
        onClick={handleDropDown}
        classname={"dropdown-button"}
      />
      {task.status && <StatusUpdate status={task.status} />}

      {openedDropDown ? (
        <section className="dropdown-section">
          <ul className="dropdown-table">
            {dropDownButtonsOptions.map((option, index) => {
              return (
                <DropDownOption
                  key={index}
                  label={option.label}
                  status={option.status}
                  className={option.className}
                  onClick={() => handleButtonStatusChange(option.status)}
                />
              );
            })}
            {/*
            <li>
              <Button
                className="pending-dropdown-button"
                label="Pending"
                onClick={() => handleButtonStatusChange(Status.pending)}
              />
            </li>
            <li>
              <Button
                className="working-dropdown-button"
                label="Working"
                onClick={() => handleButtonStatusChange(Status.working)}
              />
            </li>
            <li>
              <Button
                className="done-dropdown-button"
                label="Done"
                onClick={() => handleButtonStatusChange(Status.done)}
              />
            </li>
            <li>
              <Button
                className="cancelled-dropdown-button"
                label="Cancelled"
                onClick={() => handleButtonStatusChange(Status.cancelled)}
              />
      </li>*/}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

export default DropDown;
