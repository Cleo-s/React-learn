import React from "react";

import "./dropDownOption.css";

function DropDownOption({ key, label, onClick, className }) {
   return (
      // TODO change button tag to button component
      <button className={className} key={key} onClick={onClick}>
         {label}
      </button>
   );
}

export default DropDownOption;
