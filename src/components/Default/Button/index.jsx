import React from "react";

import "./Button.css";
import '../../../Fonts/Font.css';

export default function Button({ className, label, onClick }) {
   return (
      <button className={`button ${className ?? ""}`} onClick={onClick}>
         {label}
      </button>
   );
}
