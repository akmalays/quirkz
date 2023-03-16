import { Grid, TextField } from "@mui/material";
import SquareButton from "../../button/square";

export default function SendChatBar() {
  return (
    <div>
      <Grid display="flex" gap={2} px={"24px"} pb={5}>
        <TextField
          size="small"
          fullWidth
          placeholder="Type a new message"
          sx={{
            "& input::placeholder": {
              fontSize: 15,
              fontFamily: "Lato",
              color: "#4F4F4F",
            },
            "& input": {
              fontSize: 15,
              fontFamily: "Lato",
            },
          }}
        />
        <SquareButton
          squareButtonProps={{
            name: "Send",
            color: "#2F80ED",
            fontSize: 16,
            width: "76px",
          }}
        />
      </Grid>
    </div>
  );
}
