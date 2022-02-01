import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const pages = [
  { title: "About", icon: <InfoIcon />, link: "#about" },
  { title: "Experience", icon: <WorkIcon />, link: "#experience" },
  { title: "Projects", icon: <AccountTreeIcon />, link: "#projects" },
  { title: "Contact", icon: <ContactPageIcon />, link: "#contact" },
];

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function NavBar(props) {
  const [drawerState, setDrawerState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((page) => (
          <ListItemButton component="a" href={page.link} key={page.title}>
            <ListItemText primary={page.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters id="back-to-top-anchor">
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }}}>
              <IconButton
                size="large"
                aria-label="Menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer("top", true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <React.Fragment key={"top"}>
                <Button onClick={toggleDrawer("top", true)}>{"top"}</Button>
                <Drawer
                  anchor="top"
                  open={drawerState["top"]}
                  onClose={toggleDrawer("top", false)}
                >
                  {list("top")}
                </Drawer>
              </React.Fragment>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  size="large"
                  key={page.title}
                  onClick={() => {
                    console.log(page.title);
                  }}
                  href={page.link}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default NavBar;
