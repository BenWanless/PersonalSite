import React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const socials = [
  { title: "GitHub", icon: <GitHubIcon />, link:"https://github.com/BenWanless"},
  { title: "Codepen", icon: <GitHubIcon />, link:"https://codepen.io/BenWanless"},
  { title: "LinkedIn", icon: <LinkedInIcon />, link:"https://www.linkedin.com/in/benwanless/" },
  { title: "Email", icon: <EmailIcon />, link:"mailto:bwanless@hotmail.ca" },
];

function Contact() {
  return (
    <Container maxWidth="xl" id="contact">
      <Typography variant="h3">contact me</Typography>
      <Box sx={{display: "flex", justifyContent:"center"}}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ padding: "1rem" }}
        >
          {socials.map((site) => (
            <Button
              size="large"
              key={site.title}
              onClick={() => {
                console.log(site.title);
              }}
              href={site.link}
              startIcon={site.icon}
              sx={{ my: 2, color: "white",  }}
            >
              {site.title}
            </Button>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default Contact;
