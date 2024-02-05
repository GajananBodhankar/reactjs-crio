import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  InputAdornment,
  Link,
  OutlinedInput,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./video.css";
import axios from "axios";
import { RemoveOutlined } from "@mui/icons-material";

async function getData() {
  let response = await axios.post("url", i, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await fetch("uel", {
    method: "POST",
    // body:JSON.stringify()
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}}`,
    },
  });
}

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
      <RemoveOutlined />
      <Rating />
      <Box
        sx={{
          "@media screen and (max-width:768px)": {
            display: "block",
          },
        }}
        width={"100%"}
        display={"flex"}
        alignItems={"start"}
      ></Box>
      <Button type="button"></Button>
      <CardContent>
        <Typography variant="inherit">{genre}</Typography>
        <Typography variant="subtitle1">{title}</Typography>
        <CircularProgress />
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
