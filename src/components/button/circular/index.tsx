import { Button, Icon } from "@mui/material";
import { StylesSxProps } from "../../../theme/element";
import {
  getSizeValue,
  getIconPadRight,
  getIconPadBottom,
  getIconSizeValue,
} from "./utils";

export default function CircularButton(props: any) {
  const { icon, size, color, onClick, type } = props;

  //button style
  const styles: StylesSxProps = {
    button: {
      alignItems: "center",
      minWidth: getSizeValue(size),
      width: getSizeValue(size),
      height: getSizeValue(size),
      textTransform: "none",
      backgroundColor: color,
      color: "white",
      cursor: "pointer",
      borderRadius: 10,
      "&:hover": {
        backgroundColor: "#215B9D",
        color: "white",
      },
    },
  };

  function circularIcon() {
    return (
      <div>
        <Icon sx={{ pr: getIconPadRight(size), pb: getIconPadBottom(size) }}>
          <img
            alt="circular icon"
            src={icon}
            width={getIconSizeValue(size)}
            height={getIconSizeValue(size)}
          />
        </Icon>
      </div>
    );
  }

  return (
    <div>
      <Button sx={styles.button} onClick={onClick}>
        {type === "personal" ? "F" : circularIcon()}
      </Button>
    </div>
  );
}
