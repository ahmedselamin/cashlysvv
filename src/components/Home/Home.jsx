import React from "react";
import HomeChart from "../Chart/HomeChart";
import Transactions from "../Transactions/Transactions";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="user-div">
        <span>Hello, Ahmed!</span>
        <i class="fa fa-user-circle" aria-hidden="true"></i>
      </div>
      <div className="expense-h2">
        <h2>Expense Distribution</h2>
      </div>
      <div className="chart-container">
        <HomeChart />
      </div>
      <div className="transactions-history">
        <Transactions />
      </div>
    </div>
  );
};

export default Home;
