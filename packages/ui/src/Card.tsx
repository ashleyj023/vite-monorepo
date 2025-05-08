import React from "react";
import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  sx?: SxProps; // ← Add this line
}

export const Card = ({ title, children, className, sx }: CardProps) => {
  return (
    <MuiCard className={className} elevation={3} sx={{ borderRadius: 3, padding: 2, ...sx }}>
      <MuiCardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {children}
      </MuiCardContent>
    </MuiCard>
  );
};


