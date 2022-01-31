import React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  ListSubheader,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ConestogaLogo from "../Assets/Logos/Conestoga__Logo.svg";
import BrainStationLogo from "../Assets/Logos/BrainStation__Logo.svg";

const useStyles = makeStyles({
  imageIcon: {
    display: "flex",
    height: "inherit",
    width: "inherit",
  },
});

function Education() {
  const classes = useStyles();
  const education = [
    {
      degree: "BASc, Mechanical Systems Engineering (2021)",
      institution: "Conestoga College",
      icon: (
        <Icon>
          <img className={classes.imageIcon} src={ConestogaLogo} />
        </Icon>
      ),
    },
    {
      degree: "Web Development Diploma (2021)",
      institution: "BrainStation",
      icon: (
        <Icon>
          <img className={classes.imageIcon} src={BrainStationLogo} />
        </Icon>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h6">Education</Typography>
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
    </Box>
  );
}

export default Education;
