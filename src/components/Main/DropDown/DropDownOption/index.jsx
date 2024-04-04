import React from "react";

import Button from '../../../Default/Button/index';

import "./dropDownOption.css";

function DropDownOption({ label, onClick, className }) {
   return (
      <Button className={className} onClick={onClick} label={label}>
         {label}
      </Button>
   );
}

export default DropDownOption;
