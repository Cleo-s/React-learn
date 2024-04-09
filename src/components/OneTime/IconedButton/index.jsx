import React from "react";

import './IconedButton.css';

export const IconedButton = ({ onClick, icon, disabled, classname, label}) => {
   const handleClick = (e) => {
      e.preventDefault();

      onClick();
   };

   return (
      <button
         onClick={handleClick}
         className={`iconed-button ${classname ?? ''}`}
         disabled={disabled}
      >
         {icon} {label && label}
      </button>
   );
}
