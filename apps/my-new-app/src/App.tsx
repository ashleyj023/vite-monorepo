// src/App.tsx
import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import CardWithButtons from "./components/CardWithButtons"; // Import the card component

const App: React.FC = () => {
  return (
    <div className="App">
      <Container sx={{ paddingTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Products
        </Typography>

        {/* Grid Layout */}
        <Grid container spacing={3} justifyContent="center">
          {/* Grid items */}
          <Grid item xs={12} sm={6} md={4}>
            <CardWithButtons /> {/* Card 1 */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardWithButtons /> {/* Card 2 */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardWithButtons /> {/* Card 3 */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardWithButtons /> {/* Card 4 */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardWithButtons /> {/* Card 5 */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardWithButtons /> {/* Card 6 */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;








