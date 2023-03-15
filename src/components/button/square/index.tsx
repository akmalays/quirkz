import { Button, Typography } from "@mui/material";

export default function SquareButton(props: any) {
  const { name, color } = props;
  return (
    <div>
      <Button
        sx={{
          alignItems: "center",
          width: "76px",
          height: "40px",
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
            fontSize: 16,
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
