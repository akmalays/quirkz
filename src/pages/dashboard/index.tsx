import { Grid } from "@mui/material";
import CircularButton from "../../components/button/circular";
import quicks from "../../assets/icon/quicks.svg";

export default function Dashboard() {
  return (
    <div>
      <Grid
        container
        sx={{
          fontFamily: "Lato",
          backgroundColor: "#262626",
          minHeight: "100vh",
        }}
      >
        <CircularButton icon={quicks} label={"text"} />
      </Grid>
    </div>
  );
}
