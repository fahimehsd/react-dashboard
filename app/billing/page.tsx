import CreditCard from "@/components/CreditCard";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import React from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import Square from "@/components/Square";
import StoreIcon from "@mui/icons-material/Store";
import Payment from "@/components/Payment";

const page = () => {
  return (
    <Box sx={{ paddingInline: "15px", width: "100%" }}>
      <Header name="Billing" />
      <Box mt={"40px"} width={"65%"}>
        <Box sx={{ width: "100%", display: "flex", gap: "50px" }}>
          <CreditCard />
          <Square
            icon={
              <WalletIcon
                sx={{
                  color: "white",
                  fontSize: "50px"
                }}
              />
            }
            title={"Salary"}
            desc={"Belong Interactive"}
            price={"+$2000"}
          />
          <Square
            icon={
              <StoreIcon
                sx={{
                  color: "white",
                  fontSize: "50px"
                }}
              />
            }
            title={"Paypal"}
            desc={"Freelance Payment"}
            price={"$455.00"}
          />
        </Box>
        <Payment />
      </Box>
      <Box width={"35%"}></Box>
    </Box>
  );
};

export default page;
