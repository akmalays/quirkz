import { Fade, Grid, Paper, Popper } from "@mui/material";

import InboxContent from "../paperContent/inboxContent";

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
              <Paper sx={{ width: "600px", height: "600px" }}>
                <Grid px={"32px"} py={"24px"}>
                  <InboxContent />
                </Grid>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Grid>
    </div>
  );
}
