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
  budget: string,
  status: string,
  comp: string,
  edit: string
) {
  return { img, name, budget, status, comp, edit };
}

const rows = [
  createData(
    "/icon.png",
    "Chakra Soft UI Version",
    "$14,000",
    "Working",
    "/60p.png",
    "/edit.png"
  ),
  createData(
    "/icon2.png",
    "Add Progress Track",
    "$3,000",
    "Canceled",
    "/10p.png",
    "/edit.png"
  ),
  createData(
    "/icon3.png",
    "Fix Platform Errors",
    "Not set",
    "Done",
    "/100p.png",
    "/edit.png"
  ),
  createData(
    "/icon4.png",
    "Launch our Mobile App",
    "$32,000",
    "Done",
    "/100p.png",
    "/edit.png"
  ),
  createData(
    "/icon5.png",
    "Add the New Pricing Page",
    "$400",
    "Working",
    "/25p.png",
    "/edit.png"
  )
];

const Projects = () => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        bgcolor: "white",
        padding: "20px",
        marginTop: "50px"
      }}
    >
      <Typography padding={"20px"} fontWeight={"bolder"} fontSize={"20px"}>
        Projects
      </Typography>
      <Box paddingLeft={"10px"} display={"flex"}>
        <Image src={"/circle.png"} alt="check" width={20} height={20} />
        <Typography color={"gray"} fontSize={"15px"}>
          30 done this month
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "gray", fontWeight: "bolder" }}>
                COMPANIES
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "gray", fontWeight: "bolder" }}
              >
                BUDGET
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
                COMPLETION
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
                  <Image src={row.img} alt="pic" width={30} height={30} />
                  <Typography fontWeight="bold">{row.name}</Typography>
                </TableCell>

                <TableCell align="center">{row.budget}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <Image src={row.comp} alt="comp" width={150} height={30} />
                </TableCell>
                <TableCell align="center">
                  <Image src={row.edit} alt="edit" width={20} height={20} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Projects;
