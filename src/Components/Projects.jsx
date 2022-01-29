import React from "react";
import ProjectCard from "./ProjectCard";
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  { title: "Strive Fitness (BrainStation Capstone)" },
  { title: "Spacegram" },
  { title: "project three" },
];

function Projects() {
  return (
    <Container maxWidth="xl" id="projects">
      <ScrollAnimation animateIn="fadeIn">
        <Box sx={{}}>
          <Typography variant="h3">projects</Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          // divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ display: "flex", justifyContent:"center",padding: "1rem", flexWrap: "wrap" }}
        >
          {projects.map((project) => (
            <Button
              size="large"
              key={project.title}
              onClick={() => {
                console.log(project.title);
              }}
              href={project.link}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {project.title}
            </Button>
          ))}
        </Stack>
        <ProjectCard />
      </ScrollAnimation>
    </Container>
  );
}

export default Projects;
