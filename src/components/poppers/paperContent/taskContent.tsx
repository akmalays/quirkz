import { Grid } from "@mui/material";
import SquareButton from "../../button/square";
import EditMenuItems from "./editMenuItems";

export default function TaskContent() {
  return (
    <div>
      {/* header */}
      <Grid>
        <EditMenuItems />
        <SquareButton name={"New Task"} color={"#2F80ED"} fontSize={15} />
      </Grid>
    </div>
  );
}
