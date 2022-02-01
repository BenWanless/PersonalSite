import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Typography, Container, Button, Stack } from "@mui/material";
import projectList from "../data/projects.json";

function Projects() {
  const [project, setProject] = useState(projectList[0]);

  const handleClick = (props) => {
    let result =
      projectList[
        projectList
          .map((data) => {
            return data.title;
          })
          .indexOf(props)
      ];
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
        {projectList.map((project) => (
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
