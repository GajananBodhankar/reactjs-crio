import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent.tsx";
import "./video.css";
// @mui/icons-material/Search
import SearchIcon from "@mui/icons-material/Search";
function VideosComponent() {
  let [data, setData] = useState<Array<any>>();
  let [text, setText] = useState<String>();
  async function fetchApiData(url) {
    let response = await axios.get(url);
    console.log("hi", url, text?.length);
    setData(response.data.videos);
  }
  useEffect(() => {
    let x = new URL(window.location.href);
    let u = new URLSearchParams(x.href);
    u.forEach((i, j) => console.log(i, j, "hi"));
  });
  useEffect(() => {
    let timer;
    if (!text) {
      fetchApiData("https://content-xflix-backend.azurewebsites.net/v1/videos");
    } else {
      timer = setTimeout(() => {
        fetchApiData(
          `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${text}`
        );
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [text]);
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <Box
      component="div"
      display={"flex"}
      flexDirection={"column"}
      padding={"5px 15px"}
    >
      <img src="./1159072.png" height={100} alt="image not found" />

      <Rating value={5} readOnly />
      <Button fullWidth variant="contained">
        hello
      </Button>
      <OutlinedInput
        placeholder="Search"
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon style={{ color: "red" }} />
          </InputAdornment>
        }
      />
      <Stack sx={{ backgroundColor: "red" }}>hello</Stack>
      <OutlinedInput
        placeholder="Search for items/categories"
        className="output"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "#00a278" }} />
          </InputAdornment>
        }
      />
      <TextField
        value={text}
        onChange={handleChange}
        variant="outlined"
        label="Search"
        className="textField"
      />
      <Grid container marginBottom={10} padding={1} flexDirection={"column"}>
        {data?.map((i, j) => {
          if (j > 7) {
            return (
              <Grid
                item
                key={i.id}
                className="item"
                lg={2}
                justifyContent={"center"}
              >
                <CardComponent
                  image={i.previewImage}
                  genre={i.genre}
                  title={i.title}
                  release={i.releaseDate}
                  videoLink={i.videoLink}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
}

export default VideosComponent;
