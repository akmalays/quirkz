import { Checkbox, Divider, Grid, TextField, Typography } from "@mui/material";
import SquareButton from "../../../button/square";
import EditMenuItems from "../paperComponents/editMenuItems";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import CircularLoading from "../paperComponents/circularLoading";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SvgIcon from "../../../icon/icon";
import Pencil from "../../../../assets/icon/pencil.svg";
import Clock from "../../../../assets/icon/clock.svg";

export default function TaskContent() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorAccord, setAnchorAccord] = useState<null | HTMLElement>(null);
  const [date, setDate] = useState<string>("");
  const openEl = Boolean(anchorEl);
  const openAccord = Boolean(anchorAccord);
  const openTaskMenu = (
    event: React.MouseEvent<HTMLElement>,
    type?: string
  ) => {
    type === "accord"
      ? setAnchorAccord(event.currentTarget)
      : setAnchorEl(event.currentTarget);
  };
  const closeAccordMenu = () => {
    setAnchorAccord(null);
  };
  const closeTaskMenu = () => {
    setAnchorEl(null);
  };
  const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const dataValue = [
    {
      task: "Cross-reference with Jeanne for Case #192813",
      date: "2023-03-02",
      desc: "Homeworks needed to be checked are as follows : Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.",
    },
    {
      task: "Check Data",
      date: "2023-03-02",
      desc: "check date today, asap!",
    },
    {
      task: "Review Code",
      date: "2023-03-08",
      desc: "make sure code run correctly!",
    },
    {
      task: "Create pr Evidence",
      date: "2023-03-09",
      desc: "add images and pr video evidence for latest pr #11922",
    },
    {
      task: "101 Meet With UX Lead",
      date: "2023-03-22",
      desc: "alignment about latest ux new updates",
    },
  ];
  return (
    <div>
      {/* header */}
      <Grid display={"flex"} justifyContent="space-between" pt={2} pb={5}>
        <Grid pl={10}>
          <Grid
            sx={{
              border: "solid 1px",
              borderRadius: "5px",
              borderColor: "#4F4F4F",
              py: 0.5,
              width: "100px",
              display: "flex",
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontFamily: "Lato",
                fontWeight: 700,
                color: "#4F4F4F",
                px: 1,
              }}
            >
              My Tasks
            </Typography>
            <Typography onClick={openTaskMenu} sx={{ cursor: "pointer" }}>
              <KeyboardArrowDownIcon
                sx={{ color: "#4F4F4F", width: 18, height: 18 }}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid pr={1}>
          <SquareButton
            squareButtonProps={{
              name: "New Task",
              color: "#2F80ED",
              fontSize: 13,
              cursor: "pointer",
              width: "85px",
            }}
          />
        </Grid>
      </Grid>
      {/* loading */}
      {/* <Grid display="flex" justifyContent="center" alignItems="center">
        <CircularLoading />
      </Grid> */}
      {/* Todolist accordion */}
      {dataValue.map((value) => (
        <Grid px={1} pb={1}>
          <Grid display="flex" justifyContent="space-between">
            <Grid display="flex" alignItems={"center"} pl={1}>
              <Checkbox />
              <Typography
                sx={{
                  fontSize: 13,
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "#4F4F4F",
                  maxWidth: 250,
                  textAlign: "justify",
                }}
              >
                {value.task}
              </Typography>
            </Grid>
            <Grid display="flex" px={2}>
              <Grid display="flex" alignItems={"center"} gap={1} pr={2}>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontFamily: "Lato",
                    color: "#EB5757",
                  }}
                >
                  2 Days Left
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontFamily: "Lato",
                    color: "#4F4F4F",
                  }}
                >
                  {date}
                </Typography>
              </Grid>
              <Grid display="flex" alignItems={"center"} gap={0.5}>
                <ExpandMoreIcon sx={{ color: "#4F4F4F", cursor: "pointer" }} />
                <Typography
                  onClick={(event) => openTaskMenu(event, "accord")}
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    fontFamily: "Lato",
                    color: "#4F4F4F",
                    pb: 1,
                    cursor: "pointer",
                  }}
                >
                  ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* accordion content */}
          <Grid px={6}>
            <Grid display="flex" gap={1} alignItems="center" py={0.5}>
              <SvgIcon SvgIcon icon={Clock} width={"20px"} height={"20px"} />
              <TextField
                sx={{
                  "& input": {
                    fontFamily: "Lato",
                    fontSize: 14,
                    color: "#4F4F4F",
                  },
                }}
                type="date"
                placeholder="Set Date"
                size="small"
                value={value.date}
                onChange={onDateChange}
              />
            </Grid>
            <Grid display="flex" gap={1} alignItems="center" py={1} pb={2}>
              <SvgIcon SvgIcon icon={Pencil} width={"20px"} height={"20px"} />
              <Typography
                sx={{
                  fontSize: 12,
                  fontFamily: "Lato",
                  color: "#4F4F4F",
                  maxWidth: 400,
                }}
              >
                {value.desc}
              </Typography>
            </Grid>
          </Grid>
          <Grid px={2}>
            <Divider />
          </Grid>
        </Grid>
      ))}
      {/* menu item modal */}
      <EditMenuItems
        anchorEl={anchorAccord}
        open={openAccord}
        handleClose={closeAccordMenu}
        editMenuProps={{
          menuColor1: "#EB5757",
          width: 100,
          option1: "Delete",
          fontSize: 15,
        }}
      />
      <EditMenuItems
        anchorEl={anchorEl}
        open={openEl}
        handleClose={closeTaskMenu}
        editMenuProps={{
          menuColor1: "#4F4F4F",
          menuColor2: "#4F4F4F",
          width: 200,
          option1: "Personal Errands",
          option2: "Urgent To-Do",
          fontSize: 13,
          fontWeight: 700,
        }}
      />
    </div>
  );
}
