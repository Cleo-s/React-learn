import React from "react";
import { useState } from "react";

import Button from "../../Button/index";
import { IconedButton } from "../../IconedButton";
import { Status }  from '../../../enum/status';

import ChevronDownIcon from "../../Icons/ChevronDownIcon/index";
import "./DropDown.css";

function DropDown() {
  const [openedDropDown, setOpenedDropDown] = useState(false);
  const [status, setStatus] = useState('');

  const handleDropDown = () => {
    setOpenedDropDown(!openedDropDown);
  };

  const handleButtonStatusChange = (currentStatus) => {
    setStatus(Status[currentStatus]);
    setOpenedDropDown(false);
  };

  return (
    <div className="dropdown-div">
      {/* <Button
            className="dropdown-button"
            onClick={handleDropDown}
            icon={<ChevronDownIcon />}
         /> */} 
         {status ? <p>{status}</p> : null}

         <IconedButton
           icon={<ChevronDownIcon />}
           onClick={handleDropDown}
           classname={"dropdown-button"}
         />

      {openedDropDown ? (
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
        </ul>
      ) : null}
    </div>
  );
}

export default DropDown;
