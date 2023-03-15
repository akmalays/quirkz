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
      {/* chat from another person section */}
      <Grid px={"24px"} py={1} display={"flex"} gap={1}>
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
              width: "420px",
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
              pt: 2,
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
      {/* chat from self section */}
      <Grid
        px={"24px"}
        py={1}
        display={"flex"}
        justifyContent="flex-end"
        gap={1}
      >
        <Grid>
          <Typography
            sx={{
              pt: 2,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "Lato",
              color: "#4F4F4F",
            }}
          >
            ...
          </Typography>
        </Grid>
        <Grid>
          <Grid display={"flex"} justifyContent="flex-end">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 14,
                fontFamily: "Lato",
                color: "#9B51E0",
                pb: 0.5,
              }}
            >
              You
            </Typography>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#EEDCFF",
              py: 0.5,
              borderRadius: 2,
              width: "420px",
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
                No worries. It will be completed ASAP. I’ve asked him yesterday.
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
      </Grid>
      {/* end of day
      divider */}
      <Grid px={"24px"} pt={4}>
        <Divider>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "Lato",
              color: "#4F4F4F",
            }}
          >
            Today June 09, 2023
          </Typography>
        </Divider>
      </Grid>
      {/* chat from another person section */}
      <Grid px={"24px"} py={1} display={"flex"} gap={1}>
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
              width: "420px",
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
                Hello Obaidullah, I will be your case advisor for case #029290.
                I have assigned some homework for you to fill. Please keep up
                with the due dates. Should you have any questions, you can
                message me anytime. Thanks.
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
              pt: 2,
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
      {/* chat from self section */}
      <Grid
        px={"24px"}
        py={1}
        display={"flex"}
        justifyContent="flex-end"
        gap={1}
      >
        <Grid>
          <Typography
            sx={{
              pt: 2,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "Lato",
              color: "#4F4F4F",
            }}
          >
            ...
          </Typography>
        </Grid>
        <Grid>
          <Grid display={"flex"} justifyContent="flex-end">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 14,
                fontFamily: "Lato",
                color: "#9B51E0",
                pb: 0.5,
              }}
            >
              You
            </Typography>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#EEDCFF",
              py: 0.5,
              borderRadius: 2,
              width: "420px",
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
                Please contact Mary for questions regarding the case bcs she
                will be managing your forms from now on! Thanks Mary.
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
      </Grid>
      {/* chat from another person section */}
      <Grid px={"24px"} py={1} display={"flex"} gap={1}>
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
              width: "420px",
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
                Sure thing ,Claren.
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
              pt: 2,
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
