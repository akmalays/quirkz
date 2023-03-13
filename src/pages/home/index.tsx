import { Grid } from "@mui/material";
import quikzLogo from "../../assets/images/quicks_logo.png";

export default function Home() {
  return (
    <div>
      <Grid sx={{ backgroundColor: "#43B78D", minHeight: "100vh" }}>
        <Grid
          container
          sx={{
            pt: "15vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "50%",
          }}
        >
          <img alt="quikzImage" src={quikzLogo} />
        </Grid>
      </Grid>
    </div>
  );
}
