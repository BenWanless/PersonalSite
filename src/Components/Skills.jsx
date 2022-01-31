import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
  Box,
  Chip,
} from "@mui/material";

const skills = [
  "React",
  "HTML",
  "CSS",
  "SCSS",
  "Javascript",
  "Node.js",
  "Express",
  "REST API",
  "MySQL",
];

function Skills() {
  return (
    <Box>
      <Typography variant="h6">Skills</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {skills.map((data) => (
          <Chip
            label={data}
            sx={{ margin: "0.5rem", backgroundColor: "white" }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
