import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => (
  <div className="layout">
    <Sidebar />
    <div className="content">
      <Outlet />
    </div>
  </div>
);

export default MainLayout;
