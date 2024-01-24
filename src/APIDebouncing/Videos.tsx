import { Box, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent.tsx";
import "./video.css";
function VideosComponent() {
  let [data, setData] = useState<Array<any>>();
  let [text, setText] = useState<String>();
  async function fetchApiData(url) {
    let response = await axios.get(url);
    console.log("hi", url, text?.length);
    setData(response.data.videos);
  }
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
      <TextField
        value={text}
        onChange={handleChange}
        variant="outlined"
        label="Search"
        className="textField"
      />
      <Grid container gap={2}>
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
