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
import Image from "next/image";
import React from "react";

function createData(name: string, visitors: string, img: string) {
  return { name, visitors, img };
}

const rows = [
  createData("Facebook", "3,569", "/60.png"),
  createData("Facebook", "3,513", "/70.png"),
  createData("Google", "2,050", "/80.png"),
  createData("Instagram", "1,795", "/75.png"),
  createData("Twitter", "1,795", "/30.png")
];

const SocialTraffic = () => {
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
          Social traffic
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
                REFERRAL
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
              ></TableCell>
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
                  <Image src={row.img} alt="pic" width={150} height={15} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SocialTraffic;
