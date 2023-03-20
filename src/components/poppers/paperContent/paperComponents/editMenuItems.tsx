import { Divider, Grid, Menu, MenuItem, Typography } from "@mui/material";

export default function EditMenuItems(props: any) {
  const { anchorEl, open, handleClose, editMenuProps } = props;
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
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ width: editMenuProps.width }}>
          <Typography
            sx={{
              fontSize: editMenuProps.fontSize,
              fontFamily: "Lato",
              color: editMenuProps.menuColor1,
              my: -0.7,
              fontWeight: editMenuProps.fontWeight
                ? editMenuProps.fontWeight
                : 500,
            }}
          >
            {editMenuProps.option1}
          </Typography>
        </MenuItem>
        {editMenuProps.option2 && editMenuProps.menuColor2 ? (
          <div>
            <Grid sx={{ py: 0.5 }}>
              <Divider />
            </Grid>
            <MenuItem onClick={handleClose}>
              <Typography
                sx={{
                  fontSize: editMenuProps.fontSize,
                  fontFamily: "Lato",
                  color: editMenuProps.menuColor2,
                  my: -0.7,
                  fontWeight: editMenuProps.fontWeight
                    ? editMenuProps.fontWeight
                    : 500,
                }}
              >
                {editMenuProps.option2}
              </Typography>
            </MenuItem>
          </div>
        ) : null}
      </Menu>
    </div>
  );
}
