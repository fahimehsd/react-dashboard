"use client";
import { Box, Link } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Sidebar = () => {
  const [button, setButton] = useState(false);
  const [table, setTable] = useState(false);
  const [bill, setBill] = useState(false);
  const [profile, setProfile] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <Box
      sx={{
        width: "265px",
        height: "95%",
        backgroundColor: "white",
        border: "1px solid black",

        borderRadius: "1rem",
        marginBlock: "30px",
        marginInline: "20px",
        paddingInline: "30px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            fontWeight: "bold",
            padding: "10px"
          }}
        >
          <Image src={"/Vector.png"} alt="logo" width={17} height={17} />
          <p>argon</p>
        </Box>
        <Image src={"/border.png"} alt="border" width={250} height={1.5} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "100%",
          marginTop: "15px"
        }}
      >
        <Button
          onClick={() => {
            setButton(true);
            setBill(false);
            setTable(false);
            setSignIn(false);
            setSignUp(false);
            setProfile(false);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginBottom: "20px"
          }}
        >
          <HomeIcon
            sx={{
              borderRadius: "8px",
              color: button ? "white" : "#3182ce",
              backgroundColor: button ? "#3182ce" : "transparent"
            }}
          />

          <Typography
            textTransform={"none"}
            paddingTop={"3px"}
            color={button ? "black" : "gray"}
            fontWeight={"bold"}
          >
            Dashboard
          </Typography>
        </Button>
        <Button
          onClick={() => {
            setButton(false);
            setBill(false);
            setTable(true);
            setSignIn(false);
            setSignUp(false);
            setProfile(false);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginBottom: "20px"
          }}
        >
          <BarChartIcon
            sx={{
              borderRadius: "8px",
              color: table ? "white" : "#3182ce",
              backgroundColor: table ? "#3182ce" : "transparent"
            }}
          />

          <Typography
            textTransform={"none"}
            paddingTop={"3px"}
            color={table ? "black" : "gray"}
            fontWeight={"bold"}
          >
            Tables
          </Typography>
        </Button>
        <Button
          onClick={() => {
            setButton(false);
            setBill(true);
            setTable(false);
            setSignIn(false);
            setSignUp(false);
            setProfile(false);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginBottom: "20px"
          }}
        >
          <CreditCardIcon
            sx={{
              borderRadius: "8px",
              color: bill ? "white" : "#3182ce",
              backgroundColor: bill ? "#3182ce" : "transparent"
            }}
          />

          <Typography
            textTransform={"none"}
            paddingTop={"3px"}
            color={bill ? "black" : "gray"}
            fontWeight={"bold"}
          >
            Billing
          </Typography>
        </Button>

        <Typography
          color={"black"}
          fontWeight={"bolder"}
          textTransform={"uppercase"}
          marginBottom={"20px"}
        >
          account pages
        </Typography>

        <Button
          onClick={() => {
            setButton(false);
            setBill(false);
            setTable(false);
            setSignIn(false);
            setSignUp(false);
            setProfile(true);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginBottom: "20px"
          }}
        >
          <PersonIcon
            sx={{
              borderRadius: "8px",
              color: profile ? "white" : "#3182ce",
              backgroundColor: profile ? "#3182ce" : "transparent"
            }}
          />

          <Typography
            textTransform={"none"}
            paddingTop={"3px"}
            color={profile ? "black" : "gray"}
            fontWeight={"bold"}
          >
            Profile
          </Typography>
        </Button>
        <Button
          onClick={() => {
            setButton(false);
            setBill(false);
            setTable(false);
            setSignIn(true);
            setSignUp(false);
            setProfile(false);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginBottom: "20px"
          }}
        >
          <AssignmentIcon
            sx={{
              borderRadius: "8px",
              color: signIn ? "white" : "#3182ce",
              backgroundColor: signIn ? "#3182ce" : "transparent"
            }}
          />

          <Typography
            textTransform={"none"}
            paddingTop={"3px"}
            color={signIn ? "black" : "gray"}
            fontWeight={"bold"}
          >
            Sign In
          </Typography>
        </Button>
        <Button
          onClick={() => {
            setButton(false);
            setBill(false);
            setTable(false);
            setSignIn(false);
            setSignUp(true);
            setProfile(false);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginBottom: "20px"
          }}
        >
          <RocketLaunchIcon
            sx={{
              borderRadius: "8px",
              color: signUp ? "white" : "#3182ce",
              backgroundColor: signUp ? "#3182ce" : "transparent"
            }}
          />

          <Typography
            textTransform={"none"}
            paddingTop={"3px"}
            color={signUp ? "black" : "gray"}
            fontWeight={"bold"}
          >
            Sign Up
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px"
        }}
      >
        <Image src={"/pic.png"} alt="pic" width={165} height={117} />
        <Typography>Need help?</Typography>
        <Typography
          sx={{
            color: "gray"
          }}
        >
          Please check our docs
        </Typography>
        <Button
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#3182ce",
            width: "100%",
            marginBlock: "20px",
            paddingInline: "1rem",
            "&:hover": {
              backgroundColor: "#1e568b"
            }
          }}
        >
          documentation
        </Button>
        <Button
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#2D3748",
            width: "100%",
            marginBottom: "40px",
            paddingInline: "1rem",
            "&:hover": {
              backgroundColor: "#1c222d"
            }
          }}
        >
          upgrade to pro
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
