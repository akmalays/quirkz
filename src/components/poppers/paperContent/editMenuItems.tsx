import { Divider, Menu, MenuItem, Typography } from "@mui/material";

export default function EditMenuItems(props: any) {
  const { anchorEl, open, handleClose, menuColor1, menuColor2, width } = props;
  return (
    <div>
      <Menu
        hideBackdrop
        sx={{ border: "solid 1px gray" }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ width: width }}>
          <Typography
            sx={{
              fontSize: 15,
              fontFamily: "Lato",
              color: menuColor1,
              my: -0.7,
            }}
          >
            Edit
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Typography
            sx={{
              fontSize: 15,
              fontFamily: "Lato",
              color: menuColor2,
              my: -0.7,
            }}
          >
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
