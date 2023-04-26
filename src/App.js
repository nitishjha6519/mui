import React from "react";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./components/Appbar";
import city from "../src/data.json";
import { Typography } from "@mui/material/";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  function asyncRequestMimic() {
    return new Promise((resolve) => setTimeout(() => resolve(), 200));
  }

  useEffect(() => {
    asyncRequestMimic().then(() => {
      setLoading(!isLoading);
    });
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default App;
