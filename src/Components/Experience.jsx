import React from "react";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";
import Education from "./Education";
import Skills from "./Skills";

function Experience() {
  return (
    <Container maxWidth="xl" id="experience">
      <Typography variant="h3">experience</Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Education />
        <Skills />
      </Stack>
    </Container>
  );
}

export default Experience;
