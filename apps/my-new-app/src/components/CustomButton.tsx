// src/components/CustomButton.tsx
import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Define the styles directly using sx prop
const CustomButton: React.FC = () => {
  return (
    <Button
      variant="contained"  // Ensures background color is applied
      sx={{
        width: "150px",
        height: "44px",
        backgroundColor: "black",  // Set background color to black
        color: "#f5f5f5",  // Set text color to off-white
        padding: "16px",
        fontSize: "14px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#333", // Charcoal color on hover
        },
      }}
    >
      Click me
    </Button>
  );
};

export default CustomButton;