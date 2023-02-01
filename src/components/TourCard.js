import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

import "./TourCard.css";

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={tour.image} alt={tour.name} className="image" />
        <Box padding={1}>
          <Typography variant="subtitle2" component="h2">
            {tour.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: "12.5px" }} />
            <Typography variant="caption" marginLeft={1}>
              {tour.duration} hours
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Rating
              name="read-only"
              value={tour.rating}
              readOnly
              precision={0.5}
              size="small"
            />

            <Typography variant="body2" component="h2" marginLeft={1}>
              {tour.rating}
            </Typography>

            <Typography variant="caption" component="h2" marginLeft={1}>
              ({tour.numberOfReviews} Reviews)
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h2" marginLeft={1}>
              <span style={{ fontSize: "0.7em" }}>From </span> ${tour.price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
