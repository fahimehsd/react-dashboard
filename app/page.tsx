"use client";
import Cards from "@/components/Cards";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Header from "@/components/Header";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import SalesOverview from "@/components/SalesOverview";
import TotalOrders from "@/components/TotalOrders";

const page = () => {
  return (
    <Box sx={{ paddingInline: "15px", width: "100%" }}>
      <Header name="Dashboard" />
      <Cards />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          marginTop: "20px",
          gap: "20px",
          height: "100%"
        }}
      >
        <SalesOverview />
        <TotalOrders />
      </Box>
    </Box>
  );
};
export default page;
