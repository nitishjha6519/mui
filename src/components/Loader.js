import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <Container
      sx={{
        width: "80%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        {" "}
        <CircularProgress />
        <LinearProgress />
      </Box>
    </Container>
  );
}
