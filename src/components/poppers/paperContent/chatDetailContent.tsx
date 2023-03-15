import { Divider, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ChatDetailContent() {
  return (
    <div>
      {/* header section */}
      <Grid position={"sticky"}>
        <Grid
          display="flex"
          justifyContent="space-between"
          alignContent="center"
          px={"24px"}
          py={"15px"}
        >
          <Grid display="flex">
            <Grid pr={2}>
              <ArrowBackIcon />
            </Grid>
            <Grid>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: "Lato",
                  color: "#2F80ED",
                }}
              >
                I - 589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
              </Typography>
              <Typography
                sx={{
                  fontSize: 11,
                  fontFamily: "Lato",
                  color: "#828282",
                }}
              >
                3 Participants
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <CloseIcon />
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      {/* chat section */}
      <Grid px={"24px"} display={"flex"} gap={1}>
        <Grid>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "Lato",
              color: "#F8B76B",
              pb: 0.5,
            }}
          >
            Mary Hilda
          </Typography>
          <Grid
            sx={{
              backgroundColor: "#FCEED3",
              py: 0.5,
              borderRadius: 2,
              width: "450px",
            }}
          >
            <Grid sx={{ pl: 1 }}>
              <Typography
                sx={{
                  fontSize: 13,
                  pb: 1,
                  fontFamily: "Lato",
                  color: "#4F4F4F",
                }}
              >
                Just Fill me in for his updates yea?
              </Typography>
              <Typography
                sx={{
                  fontSize: 11,
                  fontFamily: "Lato",
                  color: "#4F4F4F",
                }}
              >
                19:32
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            sx={{
              pt: 1.5,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "Lato",
              color: "#4F4F4F",
            }}
          >
            ...
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
