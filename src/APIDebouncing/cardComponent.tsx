import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

function CardComponent({ image, genre, title, release }) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt="Image not found"
        height={140}
      />
      <CardContent>
        <Typography variant="inherit">{genre}</Typography>
        <Typography variant="caption">{title}</Typography>
        <Typography variant="body2">{release}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
