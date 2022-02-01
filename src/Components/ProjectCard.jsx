import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";


function ProjectCard(props) {
  const project = props.project;
  return (
    <Card sx={{ display: "flex", gap: "1rem" }}>
      <CardMedia
        component="img"
        sx={{
          width: "25%",
          display: { xs: "none", md: "flex" },
          padding: "3rem 3rem 0 3rem",
        }}
        image={project.photo}
        alt="project picture"
      />
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "200px",}}
            image={project.logo}
            alt="project picture"
          />
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHubIcon />}
            onClick={() => {
              window.open(project.link);
            }}
          >
            View on Github
          </Button>
        </Box>
        <Box>
          <Typography variant="h6" color="secondary" sx={{ padding: "1rem 0" }}>
            Summary
          </Typography>
          <Typography variant="body1">{project.description}</Typography>
          <Typography variant="h6" color="secondary" sx={{ padding: "1rem 0" }}>
            Tech Stack
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
            }}
            component="ul"
          >
            {project.tech.map((data) => (
              <Chip label={data.label} sx={{ margin: "0.5rem" }} />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
