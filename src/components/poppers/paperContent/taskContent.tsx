import { Grid, TextField } from "@mui/material";
import SquareButton from "../../button/square";

export default function TaskContent() {
  return (
    <div>
      {/* header */}
      <Grid>
        <TextField />
        <SquareButton name={"New Task"} color={"#2F80ED"} fontSize={13} />
      </Grid>
    </div>
  );
}
