import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "./calci.css";
import {
  handleClear,
  handleDelete,
  handleNum,
  handleResult,
} from "./helper.ts";
function Calci() {
  const [input, setInput] = useState<any>(0);
  const [result, setResult] = useState(0);
  return (
    <Box
      sx={{
        width: "600px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        style={{
          border: "1px solid black",
          alignItems: "flex-end",
          padding: "15px 20px",
          gap: 20,
          backgroundColor: "#dedede",
        }}
      >
        <Typography color="initial">{input}</Typography>
        <Typography
          color="initial"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography>Result </Typography>
          <Typography>{result}</Typography>
        </Typography>
      </Stack>
      <Stack>
        <Box sx={{ width: "100%" }}>
          <Button
            variant="contained"
            onClick={() => handleClear(setInput, setResult)}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={() => handleDelete(input, setInput)}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum(".", input, setInput)}
          >
            {" "}
            .{" "}
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum("/", input, setInput)}
          >
            /
          </Button>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button
            variant="contained"
            onClick={() => handleNum(7, input, setInput)}
          >
            7
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum(8, input, setInput)}
          >
            8
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum(9, input, setInput)}
          >
            9
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum("*", input, setInput)}
          >
            *
          </Button>
        </Box>{" "}
        <Box sx={{ width: "100%" }}>
          <Button
            variant="contained"
            onClick={() => handleNum(4, input, setInput)}
          >
            4
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum(5, input, setInput)}
          >
            5
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum(6, input, setInput)}
          >
            6
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum("+", input, setInput)}
          >
            +
          </Button>
        </Box>{" "}
        <Box sx={{ width: "100%" }}>
          <Button
            variant="contained"
            onClick={() => handleNum(1, input, setInput)}
          >
            1
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum(2, input, setInput)}
          >
            2
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum(3, input, setInput)}
          >
            3
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNum("-", input, setInput)}
          >
            -
          </Button>
        </Box>
        <Box sx={{ width: "100%" }} display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            onClick={() => handleNum(0, input, setInput)}
          >
            0
          </Button>
          <Button
            variant="contained"
            onClick={() => handleResult(input, setResult, setInput)}
          >
            =
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Calci;
