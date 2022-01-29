import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Typed from "react-typed";

function Banner() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">Hi,</Typography>
        <Typography variant="h1">
          <Typed
            strings={["I'm Ben Wanless"]}
            typeSpeed={45}
            backSpeed={50}
            loop
          ></Typed>
        </Typography>
        <Typography variant="h2">
          mechanical engineer turned full-stack developer
        </Typography>
      </Box>
    </Container>
  );
}

export default Banner;
