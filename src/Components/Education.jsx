import React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { ReactComponent as ConestogaLogo } from "../Assets/Logos/Conestoga__Logo.svg";
import { ReactComponent as BrainStationLogo } from "../Assets/Logos/BrainStation__Logo.svg";

const education = [
  {
    degree: "BASc, Mechanical Systems Engineering (2021)",
    institution: "Conestoga College",
    icon: <ConestogaLogo />,
  },
  {
    degree: "Web Development Diploma (2021)",
    institution: "BrainStation",
    icon: <BrainStationLogo />,
  },
];

function Education() {
  return (
    <Container maxWidth="xl" id="experience">
      <Typography variant="h3">education</Typography>
      <List>
        {education.map((education) => (
          <ListItem>
            <ListItemIcon>{education.icon}</ListItemIcon>
            <ListItemText
              primary={education.degree}
              secondary={education.institution}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Education;
