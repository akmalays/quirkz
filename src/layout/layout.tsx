import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";

interface Props {
  children: React.ReactNode;
}
const AppLayout: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { AppLayout };
