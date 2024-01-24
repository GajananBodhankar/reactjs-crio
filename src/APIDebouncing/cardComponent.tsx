import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";

function CardComponent({ image, genre, title, release, videoLink }) {
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
        <Typography variant="body2">{title}</Typography>
        <Typography variant="caption">{release}</Typography>
        <Link
          href={`https://www.${videoLink}`}
          target="_blank"
          display={"block"}
        >
          Watch
        </Link>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
