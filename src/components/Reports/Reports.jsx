import React from "react";
import TotalChart from "../Chart/TotalChart";
import Expenditure from "../Chart/ExpenditureChart";

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
      <div className="chart-container-total">
        <TotalChart />
      </div>
      <div className="expense-h2">
        <h2> All-time Expenditure</h2>
      </div>
      <div className="chart-container-weekly">
        <Expenditure />
      </div>
    </div>
  );
};

export default Reports;
