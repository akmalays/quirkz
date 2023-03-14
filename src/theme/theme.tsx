import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato"].join(","),
  },
  palette: {
    primary: {
      main: "#2F80ED", //dark blue
      light: "#FFFFFF", //white
    },
    secondary: {
      main: "#8785FF", //purple
    },
    warning: {
      main: "#F8B76B", //orange
    },
    error: {
      main: "#EB5757", //lightred
    },
  },
});

export { theme };
