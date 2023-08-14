import React from "react";
import Box from "@mui/material/Box";
import WalletIcon from "@mui/icons-material/Wallet";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "TODAY'S MONEY",
      price: "$53,897",
      changes: "+3.48%",
      color: "green",
      time: "Since last month",
      icon: <WalletIcon sx={{ color: "white" }} />
    },
    {
      id: 2,
      title: "TODAY'S USERS",
      price: "3,200",
      changes: "+5.20%",
      color: "green",
      time: "Since last month",
      icon: <LanguageIcon sx={{ color: "white" }} />
    },
    {
      id: 3,
      title: "NEW CLIENTS",
      price: "+2,503",
      changes: "-2.82%",
      color: "red",
      time: "Since last month",
      icon: <InsertDriveFileIcon sx={{ color: "white" }} />
    },
    {
      id: 4,
      title: "TOTAL SALES",
      price: "$173,000",
      changes: "+8.12%",
      color: "green",
      time: "Since last month",
      icon: <ShoppingCartIcon sx={{ color: "white" }} />
    }
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        gap: "40px",
        marginTop: "40px",
        width: "100%"
      }}
    >
      {cards.map((card) => (
        <Box
          key={card.id}
          sx={{
            bgcolor: "white",
            borderRadius: "15px",
            padding: "10px",
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            minWidth: "340px"
          }}
        >
          <Box>
            <Typography color={"gray"} fontWeight={"bold"} fontSize={"12px"}>
              {card.title}
            </Typography>
            <Typography fontWeight={"bold"} fontSize={"18px"}>
              {card.price}
            </Typography>
            <Box color={"gray"} display={"flex"} gap={"5px"} mt={"20px"}>
              <Typography color={card.color}>{card.changes} </Typography>
              <Typography>{card.time}</Typography>
            </Box>
          </Box>
          <Box
            sx={{ bgcolor: "#3182ce", borderRadius: "10px", padding: "10px" }}
          >
            {card.icon}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
