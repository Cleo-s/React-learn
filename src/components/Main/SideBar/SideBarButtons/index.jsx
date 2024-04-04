import React from "react";

import "./SideBarButtons.css";
import Button from "../../../Default/Button";

function SideBarButtons() {
  const buttonsInterface = [
    { label: "Main Page", className: "main-page-sidebar-button" },
    { label: "Login", className: "login-sidebar-button" },
    { label: "Contact", className: "contact-sidebar-button" },
    { label: "About", className: "about-sidebar-button" },
  ];

  return (
    <ul className="sidebar-buttons">
      {buttonsInterface.map((button, index) => (
        <li>
          <Button
            label={button.label}
            className={button.className}
            key={index}
          />
        </li>
      ))}
    </ul>
  );
}

export default SideBarButtons;
