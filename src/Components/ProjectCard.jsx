import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  ListItem,
  Chip,
  Paper,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StriveFitnessPhoto from "../Assets/images/StriveFitness__photo.svg";
import StriveFitnessLogo from "../Assets/Logos/StriveFitness__Logo.svg";

const chipData = [
  { key: 0, label: "React" },
  { key: 1, label: "Node.js" },
  { key: 2, label: "SCSS" },
  { key: 3, label: "Express" },
  { key: 4, label: "JWT" },
  { key: 5, label: "Axios" },
  { key: 6, label: "MySQL" },
];

function ProjectCard() {
  return (
    <Card sx={{ display: "flex", gap: "1rem" }}>
      <CardMedia
        component="img"
        sx={{
          width: "25%",
          display: { xs: "none", md: "flex" },
          padding: "3rem 3rem 0 3rem",
        }}
        image={StriveFitnessPhoto}
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
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "200px" }}
            image={StriveFitnessLogo}
            alt="project picture"
          />
          <Button
            variant="text"
            size="large"
            startIcon={<GitHubIcon />}
            onClick={() => {
              window.open("https://github.com/BenWanless/StriveFitness");
            }}
          >
            View on Github
          </Button>
        </Box>
        <Box>
          <Typography variant="h6" color="secondary" sx={{padding: "1rem 0"}}>
            Summary
          </Typography>
          <Typography variant="body1">
            A fitness app to track your workouts and progress in strength
            training. BrainStation capstone, 1.5 weeks in length.
          </Typography>
          <Typography variant="h6" color="secondary" sx={{padding: "1rem 0"}}>
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
            {chipData.map((data) => (
                <Chip label={data.label}sx={{margin: "0.5rem"}} />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
