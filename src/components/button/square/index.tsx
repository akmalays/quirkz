import { Button, Typography } from "@mui/material";

export default function SquareButton(props: any) {
  const { name, color, fontSize } = props;
  return (
    <div>
      <Button
        sx={{
          alignItems: "center",
          minwidth: "76px",
          minheight: "40px",
          textTransform: "none",
          backgroundColor: color,
          color: "white",
          cursor: "pointer",
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#215B9D",
            color: "white",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize,
            fontWeight: 700,
            fontFamily: "Lato",
            color: "#ffffff",
          }}
        >
          {name}
        </Typography>
      </Button>
    </div>
  );
}
