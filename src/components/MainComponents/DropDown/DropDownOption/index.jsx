import React from "react";

import Button from '../../../DefaultComponents/Button/index';

import "./dropDownOption.css";

function DropDownOption({ key, label, onClick, className }) {
   return (
      <Button className={className} key={key} onClick={onClick}>
         {label}
      </Button>
   );
}

export default DropDownOption;
