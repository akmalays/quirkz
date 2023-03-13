import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato"].join(","),
  },
  palette: {
    primary: {
      main: "#2F80ED",
    },
    secondary: {
      main: "#4F4F4F",
    },
  },
});

export { theme };
