// PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import "./Chart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Financial Overview",
        data: [1000, 500], // Replace with your dynamic data
        backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"], // Contrasting colors
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: "60%", margin: "1em 0.5em" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
