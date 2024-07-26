import React from "react";
import TotalChart from "../Chart/TotalChart";

//import "./Home.css";

const Reports = () => {
  return (
    <div className="reports-container">
      <div className="user-div">
        <span>Hello, Ahmed!</span>
        <i class="fa fa-user-circle" aria-hidden="true"></i>
      </div>
      <div className="expense-h2">
        <h2>Overall Finances</h2>
      </div>
      <div className="chart-container">
        <TotalChart />
      </div>
    </div>
  );
};

export default Reports;
