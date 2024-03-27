import React from "react";
import { useState } from "react";

import Button from "../../Button/index";
import StatusUpdate from "../../statusUpdate";
import { IconedButton } from "../../IconedButton";
import { Status } from "../../../enum/status";

import ChevronDownIcon from "../../Icons/ChevronDownIcon/index";
import "./DropDown.css";

function DropDown({ openedDropDown, setOpenedDropDown }) {
  const [status, setStatus] = useState("");

  const handleDropDown = () => {
    setOpenedDropDown(!openedDropDown);
  };

  const handleButtonStatusChange = (currentStatus) => {
    setStatus(currentStatus);
    setOpenedDropDown(false);
  };

  return (
    <div className="dropdown-div">
      <IconedButton
        icon={<ChevronDownIcon />}
        onClick={handleDropDown}
        classname={"dropdown-button"}
      />
      {status && <StatusUpdate status={status} />}

      {openedDropDown ? (
        <section className="dropdown-section">
          <ul className="dropdown-table">
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
            </li>
          </ul>
        </section>
      ) : null}
    </div>
  );
}

export default DropDown;
