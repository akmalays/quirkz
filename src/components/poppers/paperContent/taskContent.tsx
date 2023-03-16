import { Grid, Typography } from "@mui/material";
import SquareButton from "../../button/square";
import EditMenuItems from "./editMenuItems";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export default function TaskContent() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openTaskMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeTaskMenu = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {/* header */}
      <Grid display={"flex"} justifyContent="space-between" pt={2} pb={1}>
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
      <EditMenuItems
        anchorEl={anchorEl}
        open={open}
        handleClose={closeTaskMenu}
        editMenuProps={{
          menuColor1: "#4F4F4F",
          menuColor2: "#4F4F4F",
          width: 200,
          option1: "Personal Errands",
          option2: "Urgent To-Do",
          fontSize: 13,
        }}
      />
    </div>
  );
}
