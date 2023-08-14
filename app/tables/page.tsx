import Authors from "@/components/Authors";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box sx={{ paddingInline: "15px", width: "100%" }}>
      <Header name="Tables" />
      <Authors />
    </Box>
  );
};

export default page;
