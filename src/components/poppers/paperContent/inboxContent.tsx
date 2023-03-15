import {
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircularButton from "../../button/circular";
import WhitePerson from "../../../assets/icon/person_white.svg";
import BlackPerson from "../../../assets/icon/person_black.svg";

export default function InboxContent() {
  return (
    <div>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#4F4F4F" }} />
            </InputAdornment>
          ),
        }}
        label="Search"
        fullWidth
        variant="outlined"
        size="small"
        sx={{
          "& input": {
            mx: 2,
            fontSize: 14,
          },
        }}
        type="search"
      />
      <Grid>
        <Grid py={"22px"} display="flex" gap={2}>
          <Grid display="flex">
            <CircularButton
              size={"small"}
              icon={BlackPerson}
              color={"#E0E0E0"}
            />
            <Grid zIndex={1000} ml={-2}>
              <CircularButton
                size={"small"}
                icon={WhitePerson}
                color={"#2F80ED"}
              />
            </Grid>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: 13,
                fontFamily: "Lato",
                color: "#2F80ED",
              }}
            >
              109220 - Naturalization
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 12,
                fontFamily: "Lato",
                color: "#4F4F4F",
              }}
            >
              Cameron Phillips :
            </Typography>
            <Typography
              sx={{
                fontSize: 11,
                fontFamily: "Lato",
                color: "#828282",
              }}
            >
              Please check this out!
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontSize: 11,
                fontFamily: "Lato",
                color: "#828282",
              }}
            >
              Januari 1, 2021 19:10
            </Typography>
          </Grid>
        </Grid>
        <Divider />

        <Grid py={"22px"} display="flex" gap={2}>
          <Grid display="flex">
            <CircularButton
              size={"small"}
              icon={BlackPerson}
              color={"#E0E0E0"}
            />
            <Grid zIndex={1000} ml={-2}>
              <CircularButton
                size={"small"}
                icon={WhitePerson}
                color={"#2F80ED"}
              />
            </Grid>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: 13,
                fontFamily: "Lato",
                color: "#2F80ED",
              }}
            >
              Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up -
              Brief Service ]
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 12,
                fontFamily: "Lato",
                color: "#4F4F4F",
              }}
            >
              Ellen :
            </Typography>
            <Typography
              sx={{
                fontSize: 11,
                fontFamily: "Lato",
                color: "#828282",
              }}
            >
              Hey, please read.
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontSize: 11,
                fontFamily: "Lato",
                color: "#828282",
              }}
            >
              Januari 1, 2021 19:10
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid py={"22px"} display="flex" gap={2}>
          <Grid display="flex">
            <CircularButton
              size={"small"}
              icon={BlackPerson}
              color={"#E0E0E0"}
            />
            <Grid zIndex={1000} ml={-2}>
              <CircularButton
                size={"small"}
                icon={WhitePerson}
                color={"#2F80ED"}
              />
            </Grid>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: 13,
                fontFamily: "Lato",
                color: "#2F80ED",
              }}
            >
              8405-Diana SALAZAR MUNGUIA
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 12,
                fontFamily: "Lato",
                color: "#4F4F4F",
              }}
            >
              Cameron Phillips :
            </Typography>
            <Typography
              sx={{
                fontSize: 11,
                fontFamily: "Lato",
                color: "#828282",
              }}
            >
              I understand your initial concerns and thats very valid,
              Elizabeth. But you ...
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontSize: 11,
                fontFamily: "Lato",
                color: "#828282",
              }}
            >
              Januari 1, 2021 19:10
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid py={"22px"} display="flex" gap={2}>
          <Grid px={1}>
            <CircularButton
              size={"small"}
              icon={WhitePerson}
              color={"#2F80ED"}
              type="personal"
            />
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: 13,
                fontFamily: "Lato",
                color: "#2F80ED",
              }}
            >
              FastVisa Support
            </Typography>
            <Typography
              sx={{
                fontSize: 11,
                fontFamily: "Lato",
                color: "#828282",
              }}
            >
              Hey there! Welcome to your inbox.
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{
                fontSize: 11,
                fontFamily: "Lato",
                color: "#828282",
              }}
            >
              Januari 1, 2021 19:10
            </Typography>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
    </div>
  );
}
