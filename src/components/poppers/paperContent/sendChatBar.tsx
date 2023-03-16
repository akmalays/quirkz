import { Grid, TextField } from "@mui/material";
import SquareButton from "../../button/square";

export default function SendChatBar() {
  return (
    <div>
      <Grid display="flex" gap={2} px={"24px"} pb={5}>
        <TextField size="small" fullWidth label="Type a new message" />
        <SquareButton name={"Send"} color={"#2F80ED"} fontSize={16} />
      </Grid>
    </div>
  );
}
