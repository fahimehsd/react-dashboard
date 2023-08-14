import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Box, Typography } from "@mui/material";
Chart.register(CategoryScale);
const SalesOverview = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Mobile apps",
        backgroundColor: "rgb(202, 202, 202)",
        borderColor: "rgb(202, 202, 202)",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
      },
      {
        label: "Websites",
        backgroundColor: "rgb(99, 172, 255)",
        borderColor: "rgb(99, 172, 255)",
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400]
      }
    ]
  };
  return (
    <Box
      sx={{
        background:
          "linear-gradient(81.62deg, rgb(49, 56, 96) 2.25%, rgb(21, 25, 40) 79.87%)",
        height: "600px",
        borderRadius: "20px",
        marginTop: "20px",
        padding: "20px"
      }}
    >
      <Typography fontWeight={"bolder"} mb={"10px"} color={"white"}>
        Sales Overview
      </Typography>
      <Box display={"flex"} gap={"5px"}>
        <Typography fontSize={"15px"} color={"green"}>
          (+5) more
        </Typography>
        <Typography fontSize={"15px"} color={"white"}>
          in 2021
        </Typography>
      </Box>

      <Line
        data={data}
        options={{ maintainAspectRatio: false, responsive: true }}
      />
    </Box>
  );
};

export default SalesOverview;
