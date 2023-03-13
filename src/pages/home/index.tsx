/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import quikzLogo from "../../assets/images/quicks_logo.png";

export default function Home() {
  const [progress, setProgress] = useState<number>(10);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          navigate("/chat");
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
  }, []);

  return (
    <div>
      <Grid sx={{ backgroundColor: "#43B78D", minHeight: "100vh" }}>
        <Grid
          container
          sx={{
            pt: "15vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img alt="quikzImage" src={quikzLogo} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: "10vh",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
