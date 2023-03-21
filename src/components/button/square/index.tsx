import { Button, Typography } from "@mui/material";

export default function SquareButton(props: any) {
  const { squareButtonProps } = props;
  return (
    <div>
      <Button
        sx={{
          alignItems: "center",
          cursor: "pointer",
          minwidth: "76px",
          width: squareButtonProps.width,
          minheight: "40px",
          textTransform: "none",
          backgroundColor: squareButtonProps.color,
          color: "white",
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#215B9D",
            color: "white",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: squareButtonProps.fontSize,
            fontWeight: 700,
            fontFamily: "Lato",
            color: "#ffffff",
          }}
        >
          {squareButtonProps.name}
        </Typography>
      </Button>
    </div>
  );
}
