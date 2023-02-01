import React from "react";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./components/Appbar";
import city from "../src/data.json";
import { Typography } from "@mui/material/";

const App = () => {
  return (
    <div>
      <SearchAppBar />
      <Container maxWidth="lg" sx={{ marginY: 5 }}>
        {city.map((item) => {
          return (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                {item.name}
              </Typography>

              <Grid container spacing={5}>
                {item.tours.map((tour, index) => (
                  <TourCard tour={tour} key={index} />
                ))}
              </Grid>
            </>
          );
        })}
      </Container>
    </div>
  );
};

export default App;
