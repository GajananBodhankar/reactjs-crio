import { Button, Card, CardContent, CardMedia, CircularProgress, Link, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";

function CardComponent({ image, genre, title, release, videoLink }) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt="Image not found"
        sx={{
          "@media screen and (min-width:600px)": {
            height: 200,
          },
        }}
      />
      <Rating   />
      <Button type="button"></Button>
      <CardContent>
        <Typography variant="inherit">{genre}</Typography>
        <Typography variant="subtitle1">{title}</Typography>
        <CircularProgress  />
        <Stack flexDirection={"column"}></Stack>
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
