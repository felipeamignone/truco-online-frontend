"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#16d404",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#000000", // adjust as needed
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5", // light gray background
      paper: "#ffffff", // white paper background
    },
    text: {
      primary: "#333333", // dark gray text
      secondary: "#666666", // lighter gray text
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
        containedPrimary: {
          backgroundColor: "#16d404",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#13b903", // slightly darker green on hover
          },
        },
      },
    },
  },
});

export default theme;
