import { Fade, Grid, Paper, Popper, Typography } from "@mui/material";

export default function ChatPoppers(props: any) {
  const { open, anchorEl, placement } = props;
  return (
    <div>
      <Grid mb={1}>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
          sx={{ pb: 1 }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper sx={{ width: "534px", height: "537px" }}>
                <Typography sx={{ p: 2 }}>
                  The content of the Popper.
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Grid>
    </div>
  );
}
