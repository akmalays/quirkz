import { CircularProgress, Grid, Typography } from "@mui/material";

export default function LoadingSnackBar() {
  return (
    <div>
      <Grid px={3} pb={1}>
        <Grid
          sx={{
            backgroundColor: "#E9F3FF",
            py: 1,
            px: 2,
            display: "flex",
            alignItems: "center",
            gap: 3,
            borderRadius: 2,
          }}
        >
          <CircularProgress size="1.5rem" sx={{ size: "30px" }} />
          <Typography
            sx={{
              fontSize: 12,
              fontFamily: "Lato",
              color: "#4F4F4F",
            }}
          >
            Please wait while we connect you with one of our team ...
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
