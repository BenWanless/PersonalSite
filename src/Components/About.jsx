import React from "react";
import Experience from "./Experience";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";

function About() {
  return (
    <Container maxWidth="xl" id="about">
      <Box sx={{}}>
        <Typography variant="h3">about</Typography>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{ justifyContent: "center" }}
      >
        <Box sx={{ padding: "1rem 0", width: "100%" }}>
          <Typography variant="p">
            I am a recent BaSC graduate transitioning to Software Development.
            Recently successfully completed BrainStations Web Development
            bootcamp to better my development skills was invited back as a
            Teaching Assistant for the winter 2022 cohort. I have a varied
            background in Mechanical Engineering - from owning complex battery
            designs for military use to the manufacturing space in the
            automotive industry and food production. I have a proven ability to
            work harmoniously as part of a team or as an individual as a result
            of my past work experience and group projects at school. In
            addition, I have the ability to adapt and learn quickly in
            ever-changing engineering environments and to stakeholder needs. In
            my free time I enjoy coding, 3D printing, lifting weights in my gym
            or tinkering in my workshop.
          </Typography>
        </Box>
        <Experience />
      </Stack>
    </Container>
  );
}

export default About;
