import { Grid, Typography } from "@mui/material";
import CircularButton from "../../components/button/circular";
import Quicks from "../../assets/icon/quicks.svg";
import Chat from "../../assets/icon/chat.svg";
import Task from "../../assets/icon/task.svg";
import { dashboardStyles } from "./styles";
import { useCallback, useState } from "react";

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
