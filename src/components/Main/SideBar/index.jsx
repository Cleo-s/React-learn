import React from "react";

import SideBarButtons from "./SideBarButtons";
import { Divider } from "../../Default/Divider/index";

import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar-div">
      <Divider axis="horizontal" />
      <Divider axis="vertical" />
      <header className="sidebar-header">Navigation Sidebar</header>
      <nav className="sidebar-nav">
        <SideBarButtons />
      </nav>
    </div>
  );
}

export default SideBar;
