import {
  Divider,
  Grid,
  InputAdornment,
  PopperPlacementType,
  TextField,
  Typography,
} from "@mui/material";
import CircularButton from "../../components/button/circular";
import Quicks from "../../assets/icon/quicks.svg";
import Chat from "../../assets/icon/chat.svg";
import Task from "../../assets/icon/task.svg";
import Chat_White from "../../assets/icon/chat_white.svg";
import Task_White from "../../assets/icon/task_white.svg";
import Search from "../../assets/icon/search.svg";
import { dashboardStyles } from "./styles";
import { useCallback, useState } from "react";
import SvgIcon from "../../components/icon/icon";
import ChatPoppers from "../../components/poppers/chatPoppers";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openPoppers, setOpenPoppers] = useState<boolean>(false);
  const [type, setType] = useState<string | undefined>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  //open chat poppers
  const handleOpenPoppers =
    (newPlacement: PopperPlacementType, type?: string) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpenPoppers((prev) => placement !== newPlacement || !prev);

      setPlacement(newPlacement);
      setType(type);
      setIsActive(true);
    };

  //switch toggler
  const switchSetType = (type: string = "chat") => {
    type === "chat" ? setType("task") : setType("chat");
  };

  // switch menu open
  const switchMenuOpen = (type: string) => {
    if (type === "chat") {
      return handleOpenPoppers("top-end", "chat");
    } else {
      return handleOpenPoppers("top-end", "task");
    }
  };

  console.log(isActive, "active");
  console.log(isOpen, "open");

  //open close
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
              sx={{ backgroundColor: "#E0E0E0" }}
            />
          </Grid>
          <Grid>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon icon={Search} width={"20px"} height={"20px"} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              variant="filled"
              size="small"
              sx={{
                width: "81.5vw",
                "& input": {
                  color: "#ffffff",
                  mt: -1,
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
                <Typography sx={dashboardStyles.titleText}>
                  {type === "chat" ? "Task" : "Chat"}
                </Typography>
                <CircularButton
                  size={"medium"}
                  iconSize={"medium"}
                  icon={type === "chat" ? Task : Chat}
                  color={"#ffffff"}
                  onClick={() =>
                    isActive ? switchSetType(type as string) : null
                  }
                />
              </Grid>
              <Grid>
                <Typography sx={dashboardStyles.titleText}>
                  {" "}
                  {type === "chat" ? "Chat" : "Task"}
                </Typography>
                {isActive ? (
                  <Grid display="flex">
                    <CircularButton
                      type={"none"}
                      size={"large"}
                      color={"#4F4F4F"}
                    />
                    <Grid zIndex={1000} ml={-7}>
                      <CircularButton
                        size={"custom"}
                        iconSize={"custom"}
                        icon={type === "chat" ? Chat_White : Task_White}
                        color={type === "chat" ? "#8785FF" : "#F8B76B"}
                        onClick={switchMenuOpen(type as string)}
                      />
                    </Grid>
                  </Grid>
                ) : (
                  <CircularButton
                    size={"medium"}
                    iconSize={"medium"}
                    icon={type === "chat" ? Chat : Task}
                    color={"#ffffff"}
                    onClick={switchMenuOpen(type as string)}
                  />
                )}
              </Grid>
            </>
          )}
          {isActive ? null : (
            <Grid pt={3}>
              <CircularButton
                onClick={toggleSlider}
                size={"large"}
                iconSize={"large"}
                icon={Quicks}
                color={"#2F80ED"}
              />
            </Grid>
          )}
        </Grid>
        <ChatPoppers
          type={type}
          open={openPoppers}
          anchorEl={anchorEl}
          placement={placement}
        />
      </Grid>
    </div>
  );
}
