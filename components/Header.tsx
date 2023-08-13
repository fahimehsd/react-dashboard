import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = (name: NameOfPage) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Box>
        <Typography color={"white"} fontSize={"12px"}>
          Pages / {name.name}
        </Typography>
        <Typography color={"white"} fontWeight={700}>
          {name.name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
            borderRadius: "15px"
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Type here..."
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
        <Link
          href={"/signIn"}
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center"
          }}
        >
          <PersonIcon />
          Sign In
        </Link>

        <IconButton sx={{ color: "white" }}>
          <SettingsIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <NotificationsIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
