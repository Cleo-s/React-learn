import React from "react";

import './IconedButton.css';

export const IconedButton = ({ onClick, icon, disabled, classname }) => {
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
         {icon}
      </button>
   );
}
