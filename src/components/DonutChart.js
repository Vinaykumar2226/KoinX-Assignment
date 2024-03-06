import React from "react";
import { Chart as ChasrtJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChasrtJS.register(ArcElement, Tooltip, Legend);

function DonutChart() {
  const data = {
    labels: ["Crowdsale investors", "Foundation"],
    datasets: [
      {
        label: "Initial Distribution",
        data: [80, 20],
        backgroundColor: ["blue", "yellow"],
      },
    ],
    borderColor: ["black", "red"],
  };
  return (
    <div
      style={{
        height: "300px",
        display: "flex",
        justifyContent: "center",
        padding: 15,
      }}
    >
      <Doughnut data={data}></Doughnut>
    </div>
  );
}

export default DonutChart;
