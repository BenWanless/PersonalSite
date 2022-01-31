import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import projectList from "../data/projects.json"

console.log(projectList)

const projects = [
  {
    title: "Strive Fitness (BrainStation Capstone)",
    description:
      "A fitness app to track your workouts and progress in strength training. BrainStation capstone, 1.5 weeks in length.",
    link: "https://github.com/BenWanless/StriveFitness",
    logo: "../Assets/images/StriveFitness__Logo.svg",
    photo: "../Assets/Logos/StriveFitness__photo.svg",
    tech: [
      { key: 0, label: "React" },
      { key: 1, label: "Node.js" },
      { key: 2, label: "SCSS" },
      { key: 3, label: "Express" },
      { key: 4, label: "JWT" },
      { key: 5, label: "Axios" },
      { key: 6, label: "MySQL" },
    ],
  },
  {
    title: "Spacegram",
    description:
      "An online site that allows you to scroll through beautiful pictures from the NASA APOD API, With the endless scroll functionality youll be here for hours.",
    link: "https://github.com/BenWanless/shopify-coding-challenge",
    tech: [
      { key: 0, label: "React" },
      { key: 1, label: "Material UI" },
      { key: 2, label: "Axios" },
      { key: 3, label: "REST API" },
    ],
  },
];

function Projects() {
  const [project, setProject] = useState([projects[0]]);

  const handleClick = (props) => {
    let result = projects.filter((data) => {
      return data.title === props;
    });
    setProject(result);
  };

  return (
    <Container maxWidth="xl" id="projects">
      <Typography variant="h3">projects</Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project) => (
          <Button
            size="large"
            key={project.title}
            onClick={() => {
              handleClick(project.title);
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {project.title}
          </Button>
        ))}
      </Stack>
      <ProjectCard project={project} />
    </Container>
  );
}

export default Projects;
