import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React from "react";

function createData(
  name: string,
  visitors: string,
  unique: number,
  bounce: string
) {
  return { name, visitors, unique, bounce };
}

const rows = [
  createData("/argon/", "4,569", 340, "46,53%"),
  createData("/argon/index.html", "3,569", 319, "46,53%"),
  createData("/argon/charts.html", "3,513", 294, "36,49%"),
  createData("/argon/labels.html", "2,050", 147, "50,87%"),
  createData("argon/profile.html", "1,795", 190, "46,53%")
];

const PageVisits = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        boxShadow: "0 0 10px 0 silver",
        borderRadius: "20px",
        padding: "10px"
      }}
    >
      <Box
        mb={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontSize={"20px"} fontWeight={"bolder"}>
          Page visits
        </Typography>
        <Button
          sx={{
            bgcolor: "#4299e1",
            color: "white",
            padding: "10px",
            borderRadius: "8px"
          }}
        >
          SEE ALL
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "whitesmoke" }}>
            <TableRow>
              <TableCell sx={{ color: "gray", fontWeight: "bolder" }}>
                PAGE NAME
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "gray", fontWeight: "bolder" }}
              >
                VISITORS
              </TableCell>
              <TableCell
                sx={{ color: "gray", fontWeight: "bolder" }}
                align="center"
              >
                UNIQUE USERS
              </TableCell>
              <TableCell
                sx={{ color: "gray", fontWeight: "bolder" }}
                align="center"
              >
                BOUNCE RATE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ fontWeight: "bolder" }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell sx={{ fontWeight: "bolder" }} align="center">
                  {row.visitors}
                </TableCell>
                <TableCell sx={{ fontWeight: "bolder" }} align="center">
                  {row.unique}
                </TableCell>
                <TableCell sx={{ fontWeight: "bolder" }} align="center">
                  {row.bounce}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PageVisits;
