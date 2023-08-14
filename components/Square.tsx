import { Box, Typography } from "@mui/material";
import React from "react";

const Square = ({ icon, title, desc, price }: SquareProps) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "240px",
        height: "240px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "25px"
      }}
    >
      <Box
        sx={{
          bgcolor: "#3182CE",
          width: "64px",
          height: "64px",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {icon}
      </Box>
      <Typography fontSize={"25px"} fontWeight={"bold"}>
        {title}
      </Typography>
      <Typography mb={"10px"} color={"gray"}>
        {desc}
      </Typography>
      <Typography
        sx={{
          borderTop: "1px solid silver",
          width: "150px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
          fontWeight: "bold"
        }}
      >
        {price}
      </Typography>
    </Box>
  );
};

export default Square;
