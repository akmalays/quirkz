import { Box, CircularProgress, Grid, Typography } from "@mui/material";

export default function CircularLoading() {
  return (
    <div>
      <Grid
        pb={2}
        display="grid"
        justifyContent={"center"}
        alignContent="center"
      >
        <CircularProgress size="4rem" sx={{ color: "#E0E0E0" }} />
      </Grid>
      <Grid>
        <Typography
          sx={{
            fontSize: 14,
            fontFamily: "Lato",
            color: "#4F4F4F",
          }}
        >
          Loading Task List ...
        </Typography>
      </Grid>
    </div>
  );
}
