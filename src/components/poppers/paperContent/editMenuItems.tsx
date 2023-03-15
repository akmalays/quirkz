import { Divider, Menu, MenuItem, Typography } from "@mui/material";

export default function EditMenuItems(props: any) {
  const { anchorEl, open, handleClose } = props;
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
        <MenuItem onClick={handleClose} sx={{ width: 120 }}>
          <Typography
            sx={{
              fontSize: 15,
              fontFamily: "Lato",
              color: "#2F80ED",
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
              color: "#EB5757",
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
