import { Box, Typography } from "@mui/material";
import { CategoryScale, Chart } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
Chart.register(CategoryScale);
const TotalOrders = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(237, 137, 54, 0.85)",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        borderRadius: 100,
        barThickness: 25
      }
    ]
  };
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "20px",
        padding: "10px",
        height: "600px",
        marginBottom: "70px"
      }}
    >
      <Typography color={"gray"} fontSize={"15px"} fontWeight={"bold"}>
        PERFORMANCE
      </Typography>
      <Typography fontWeight={"bolder"} fontSize={"20px"}>
        Total orders
      </Typography>

      <Bar
        data={data}
        options={{ maintainAspectRatio: false, responsive: true }}
      />
    </Box>
  );
};

export default TotalOrders;
