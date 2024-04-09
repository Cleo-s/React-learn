import React from "react";

import SideBarButtons from "./SideBarButtons";
import { Divider } from "../../Default/Divider/index";
import MainPageIcon from '../../Icons/MainPageIcon';

import "./SideBar.css";
import '../../../Fonts/Font.css';

function SideBar() {
  return (
    <div className="sidebar-div">
      <Divider axis="horizontal" />
      <Divider axis="vertical" />
      <header className="sidebar-header">Sidebar Menu</header>
      <nav className="sidebar-nav">
        <MainPageIcon className='main-page-icon'/>
        <SideBarButtons />
      </nav>
    </div>
  );
}

export default SideBar;
