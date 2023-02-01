import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TourCard.css";

const TourCard = (props) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt="las Vegas"
          className="image"
        />
        <Box padding={1}>
          <Typography variant="subtitle2" component="h2">
            Immerse into the Falls
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
