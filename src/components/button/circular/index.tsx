import { Button, Icon } from "@mui/material";
import { StylesSxProps } from "../../../theme/element";

export default function CircularButton(props: any) {
  const { icon } = props;

  //button style
  const styles: StylesSxProps = {
    button: {
      alignItems: "center",
      width: "68px",
      height: "68px",
      textTransform: "none",
      backgroundColor: "#2F80ED",
      color: "white",
      cursor: "pointer",
      borderRadius: 30,
      "&:hover": {
        backgroundColor: "#215B9D",
        color: "white",
      },
    },
  };
  const circularIcon = () => {
    return (
      <div>
        <Icon sx={{ pr: 4, pb: 3 }}>
          <img alt="circular icon" src={icon} width="56px" height="56px" />
        </Icon>
      </div>
    );
  };

  return (
    <div>
      <Button sx={styles.button}>{circularIcon()}</Button>
    </div>
  );
}
