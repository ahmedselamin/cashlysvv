import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => (
  <nav className="sidebar">
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/settings">Settings</NavLink>
      </li>
      <li>
        <NavLink to="/reports">Reports</NavLink>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
