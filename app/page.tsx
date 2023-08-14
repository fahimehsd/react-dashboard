"use client";
import Cards from "@/components/Cards";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Header from "@/components/Header";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import SalesOverview from "@/components/SalesOverview";
import TotalOrders from "@/components/TotalOrders";
import PageVisits from "@/components/PageVisits";
import SocialTraffic from "@/components/SocialTraffic";

const page = () => {
  return (
    <Box sx={{ paddingInline: "15px", width: "100%" }}>
      <Header name="Dashboard" />
      <Cards />
      <Box display={"flex"} width={"100%"} gap={"40px"} mt={"20px"}>
        <Box
          sx={{
            width: "60%",
            gap: "20px",
            height: "100%"
          }}
        >
          <SalesOverview />
          <PageVisits />
        </Box>
        <Box
          sx={{
            width: "60%",
            gap: "20px",
            height: "100%"
          }}
        >
          <TotalOrders />
          <SocialTraffic />
        </Box>
      </Box>
    </Box>
  );
};
export default page;
