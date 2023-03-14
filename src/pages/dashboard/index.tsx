import {
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CircularButton from "../../components/button/circular";
import Quicks from "../../assets/icon/quicks.svg";
import Chat from "../../assets/icon/chat.svg";
import Task from "../../assets/icon/task.svg";
import Search from "../../assets/icon/search.svg";
import { dashboardStyles } from "./styles";
import { useCallback, useState } from "react";
import SvgIcon from "../../components/icon/icon";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //open close slider
  const toggleSlider = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div>
      <Grid
        container
        sx={{
          backgroundColor: "#262626",
          minHeight: "100vh",
        }}
      >
        <Grid display="flex" ml="18vw">
          <Grid>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "#E0E0E0", minHeight: "100vh" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon icon={Search} width={"20px"} height={"20px"} />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              size="small"
              sx={{
                width: "81.9vw",
                "& input": {
                  color: "#ffffff",
                  mt: -0.5,
                  mb: 1,
                  ml: 2,
                },
                backgroundColor: "#828282",
              }}
              type="search"
            />
          </Grid>
        </Grid>

        <Grid
          display="flex"
          justifyContent={"flex-end"}
          alignItems="flex-end"
          bottom={2}
          right={2}
          padding={2}
          position={"fixed"}
          gap={2}
        >
          {isOpen && (
            <>
              <Grid>
                <Typography sx={dashboardStyles.titleText}>Task</Typography>
                <CircularButton size={"medium"} icon={Task} color={"#ffffff"} />
              </Grid>
              <Grid>
                <Typography sx={dashboardStyles.titleText}> Inbox</Typography>
                <CircularButton size={"medium"} icon={Chat} color={"#ffffff"} />
              </Grid>
            </>
          )}
          <Grid pt={3}>
            <CircularButton
              onClick={toggleSlider}
              size={"large"}
              icon={Quicks}
              color={"#2F80ED"}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
