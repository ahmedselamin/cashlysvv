import React from "react";
import HomeChart from "../Chart/HomeChart";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="user-div">
        <span>Welcome, Ahmed</span>
        <i class="fa fa-user-circle" aria-hidden="true"></i>
      </div>
      <div className="chart-container">
        <HomeChart />
      </div>
    </div>
  );
};

export default Home;
