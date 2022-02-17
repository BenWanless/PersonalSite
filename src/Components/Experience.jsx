import React from "react";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";
import Education from "./Education";
import Skills from "./Skills";

function Experience() {
  return (
    <Container maxWidth="xl" id="experience">
      {/* <Typography variant="h3">experience</Typography> */}
      <Stack
         direction={{ xs: "column",}}
        divider={<Divider orientation="horizonal" flexItem />}
        spacing={2}
        sx={{ justifyContent:"center"}}
      >
        <Education />
        <Skills />
      </Stack>
    </Container>
  );
}

export default Experience;
