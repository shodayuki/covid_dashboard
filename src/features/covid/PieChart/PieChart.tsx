import React from 'react';
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";

const PieChart: React.FC = () => {
  const data = useSelector(selectData);
  const motality = data.confirmed && (100 * data.deaths.value) / data.confirmed.value;

  const pieChart = data && (
    <Doughnut
      data={{
        labels: ["infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
            backgroundColor: [
              "rgba(0, 0, 255, 0.51)",
              "#000000",
              "rgba(255, 0, 0, 0.51)",
            ],
            hoverBackgroundColor: ["#36A2EB", "#3cb371", "#FF6384"],
            borderColor: ["transparent", "transparent", "transparent"],
          },
        ],
      }}
      options={{
        legend: {
          position: "bottom",
          label: {
            boxWidth: 15,
          },
        },
      }}
    />
  );

  return (
    <div>
      {data.confirmed && (
        <Typography align="center" color="textSecondary" gutterBottom>
          Motarity {data.confirmed && motality.toFixed(2)} [%]
        </Typography>
      )}
      {pieChart}
    </div>
  )
}

export default PieChart;