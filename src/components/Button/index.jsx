import React from "react";
import "./Button.css";

export default function Button({ className, label, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
