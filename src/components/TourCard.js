import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: "12.5px" }} />
            <Typography variant="body2" component="h2" marginLeft={1}>
              5 Hours
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={2}
          >
            <Rating
              name="read-only"
              value={4.5}
              readOnly
              precision={0.5}
              size="small"
            />

            <Typography variant="body2" component="h2" marginLeft={1}>
              4.5
            </Typography>

            <Typography variant="body2" component="h2" marginLeft={1}>
              (655 Reviews)
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h2" marginLeft={1}>
              From $99
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
