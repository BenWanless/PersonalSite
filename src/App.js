import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import "./App.css";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#323d31",
    },
    secondary: {
      main: '#A3B3A1',
    },
    background: {
      default: "#323d31",
    },
  },
  typography: {
    h1: {
      fontFamily: "Yeseva One",
      fontWeight: 1000,
    },
    h3: {
      fontFamily: "Yeseva One",
      fontWeight: 1000,
      padding: "2rem 0"
    },
    h6: {
      fontWeight: 700,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color:"white" }}>
        <NavBar />
        <Banner />
        <About />
        <Education/>
        <Experience />
        <Projects />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
