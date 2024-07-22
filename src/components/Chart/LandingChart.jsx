import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Income",
        data: [5000, 6000, 5500, 7000, 7500, 8000, 8500],
        borderColor: "#4ba728",
        backgroundColor: "rgba(40, 167, 69, 0.2)",
        fill: true,
      },
      {
        label: "Expenses",
        data: [3000, 2500, 3200, 2800, 3000, 3500, 3300],
        borderColor: "#af4435",
        backgroundColor: "rgba(220, 53, 69, 0.2)",
        fill: true,
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
        callbacks: {
          label: (context) => `${context.dataset.label}: $${context.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Chart;
