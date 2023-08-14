import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Payment = () => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        padding: "25px",
        bgcolor: "white",
        borderRadius: "20px",
        width: "100%"
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontWeight={"bolder"}>Payment Method</Typography>
        <Button
          sx={{
            bgcolor: "#2D3748",
            color: "white",
            borderRadius: "10px",
            paddingInline: "20px",
            paddingBlock: "10px"
          }}
        >
          ADD A NEW CARD
        </Button>
      </Box>
      <Box display={"flex"} gap={"40px"}>
        <TextField
          id="outlined-basic"
          placeholder="7812 2139 0823 XXXX"
          variant="outlined"
          margin="normal"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src={"/master.png"}
                  alt="master"
                  width={21}
                  height={15}
                />
              </InputAdornment>
            )
          }}
        />
        <TextField
          id="outlined-basic"
          placeholder="7812 2139 0823 XXXX"
          variant="outlined"
          margin="normal"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image src={"/vc.png"} alt="master" width={21} height={10} />
              </InputAdornment>
            )
          }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
