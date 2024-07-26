// AllTimeExpenditureStackedBarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import "./Chart.css";

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AllTimeExpenditureStackedBarChart = () => {
  const data = {
    labels: [
      "Jan 2023",
      "Feb 2023",
      "Mar 2023",
      "Apr 2023",
      "May 2023",
      "Jun 2023",
      "Jul 2023",
      "Aug 2023",
      "Sep 2023",
      "Oct 2023",
      "Nov 2023",
      "Dec 2023",
    ], // Monthly data labels
    datasets: [
      {
        label: "Rent",
        data: [200, 220, 250, 270, 300, 320, 310, 330, 340, 350, 360, 380], // Replace with your dynamic data
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Groceries",
        data: [100, 120, 130, 140, 150, 160, 150, 170, 160, 180, 190, 200], // Replace with your dynamic data
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Utilities",
        data: [80, 90, 100, 110, 120, 130, 120, 140, 130, 140, 150, 160], // Replace with your dynamic data
        backgroundColor: "rgba(255, 206, 86, 0.5)",
      },
      {
        label: "Entertainment",
        data: [50, 60, 70, 80, 90, 100, 90, 110, 100, 110, 120, 130], // Replace with your dynamic data
        backgroundColor: "rgba(75, 192, 192, 0.5)",
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
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
        },
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "1em 0.5em" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AllTimeExpenditureStackedBarChart;
