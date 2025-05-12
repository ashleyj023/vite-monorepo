import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography, CardActions, styled } from "@mui/material";
import CustomButton from "./CustomButton"; // Import the custom button

// Define the secondary button style
const SecondaryButton = styled(Button)({
  width: "150px",
  height: "44px",
  backgroundColor: "#f5f5f5", // Light background for secondary button
  color: "black",  // Text color for secondary button
  padding: "16px",
  fontSize: "14px",
  textTransform: "none",
  marginLeft: "16px", // Space between the two buttons
  "&:hover": {
    backgroundColor: "#ccc", // Light grey on hover
  },
});

const CardWithButtons: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* Image for the card */}
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* Action Buttons below the content */}
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <CustomButton />  {/* Primary button */}
        <SecondaryButton>Secondary</SecondaryButton>  {/* Secondary button */}
      </CardActions>
    </Card>
  );
};

export default CardWithButtons;

