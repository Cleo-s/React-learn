import React from "react";
import "./Button.css";

export default function Button({ className, label, onClick, icon }) {
   return (
      <button className={`button ${className ?? ""}`} onClick={onClick}>
         {icon ? icon : label}
      </button>
   );
}
