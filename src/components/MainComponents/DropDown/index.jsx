import React from "react";

import DropDownOption from "./DropDownOption";
import StatusUpdate from "../../OneTimeComponents/statusUpdate";
import { IconedButton } from "../../OneTimeComponents/IconedButton";
import { Status } from "../../../enum/status";

import ChevronDownIcon from "../../Icons/ChevronDownIcon/index";
import "./DropDown.css";

function DropDown({ openedDropDown, setOpenedDropDown, tasks, task }) {
  const dropDownButtonsOptions = [
    {
      label: "Pending",
      status: Status.pending,
      className: "pending-dropdown-button",
    },
    {
      label: "Working",
      status: Status.working,
      className: "working-dropdown-button",
    },
    { 
      label: "Done", 
      status: Status.done, 
      className: "done-dropdown-button" },
    {
      label: "Cancelled",
      status: Status.cancelled,
      className: "cancelled-dropdown-button",
    },
  ];

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

      {openedDropDown && (
        <ul className="dropdown-table">
          {dropDownButtonsOptions.map((option, index) => (
            <DropDownOption
              key={index}
              label={option.status}
              className={option.className}
              onClick={() => handleButtonStatusChange(option.status)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
