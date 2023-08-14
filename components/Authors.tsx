import {
  Box,
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
function createData(
  img: string,
  name: string,
  position: string,
  job: string,
  status: string,
  edit: string,
  employed: string
) {
  return { img, name, position, job, status, edit, employed };
}

const rows = [
  createData(
    "/image.png",
    "Esthera Jackson",
    "Manager",
    "Organization",
    "online",
    "Edit",
    "14/06/21"
  ),
  createData(
    "/image.png",
    "Esthera Jackson",
    "Manager",
    "Organization",
    "offline",
    "Edit",
    "14/06/21"
  ),
  createData(
    "/image.png",
    "Esthera Jackson",
    "Manager",
    "Organization",
    "online",
    "Edit",
    "14/06/21"
  ),
  createData(
    "/image.png",
    "Esthera Jackson",
    "Manager",
    "Organization",
    "offline",
    "Edit",
    "14/06/21"
  ),
  createData(
    "/image.png",
    "Esthera Jackson",
    "Manager",
    "Organization",
    "offline",
    "Edit",
    "14/06/21"
  )
];

const Authors = () => {
  return (
    <Box sx={{ borderRadius: "20px", bgcolor: "white", padding: "20px" }}>
      <Typography padding={"20px"} fontWeight={"bolder"} fontSize={"20px"}>
        Authors Table
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "gray", fontWeight: "bolder" }}>
                AUTHOR
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "gray", fontWeight: "bolder" }}
              >
                FUNCTION
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "gray", fontWeight: "bolder" }}
              >
                STATUS
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "gray", fontWeight: "bolder" }}
              >
                EMPLOYED
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}
                >
                  <Image src={row.img} alt="pic" width={50} height={50} />
                  <Typography fontWeight="bold">{row.name}</Typography>
                </TableCell>

                <TableCell align="center">
                  <Typography fontWeight={"bolder"}>{row.position}</Typography>
                  <Typography>{row.job}</Typography>
                </TableCell>
                <TableCell align="center" width={80}>
                  <Typography
                    style={{
                      backgroundColor:
                        row.status === "online" ? "#48BB78" : "#CBD5E0",
                      display: "flex",
                      justifyContent: "center",
                      width: "50px",
                      padding: "5px",
                      borderRadius: "10px",
                      color: "white"
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell align="center">{row.employed}</TableCell>
                <TableCell align="center">{row.edit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Authors;
