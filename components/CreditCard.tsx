import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CreditCard = () => {
  return (
    <Box
      sx={{
        width: "460px",
        backgroundImage: "url(/card.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "500",
        borderRadius: "40px",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography color={"white"} fontSize={"20px"} fontWeight={"bolder"}>
          Argon x Chakra
        </Typography>
        <Image src={"/Circles.png"} alt="circles" width={50} height={33} />
      </Box>

      <Box>
        <Typography fontSize={"25px"} fontWeight={"bolder"} color={"white"}>
          7812 2139 0823 XXXX
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"40px"}
          color={"white"}
          marginTop={"10px"}
        >
          <Box>
            <Typography>VALID THRU</Typography>
            <Typography>05/24</Typography>
          </Box>
          <Box>
            <Typography>CVV</Typography>
            <Typography>09X</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreditCard;
