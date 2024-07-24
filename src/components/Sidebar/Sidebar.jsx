import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sidebar">
      <div className="logo">
        <h1>Cashly.</h1>
      </div>
      <div className="logo"></div>
      <ul>
        <li>
          <NavLink to="/home">
            <i className="fas fa-home"></i>Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports">
            <i className="fas fa-chart-line"></i>Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <i className="fas fa-cog"></i>Settings
          </NavLink>
        </li>
      </ul>
      <button
        className="add-expense-btn"
        onClick={() => navigate("add-transaction")}
      >
        <i class="fa fa-plus"></i>Add Transaction
      </button>
      <button className="logout-btn">
        <i class="fa fa-sign-out-alt"></i>Logout
      </button>
    </nav>
  );
};

export default Sidebar;
