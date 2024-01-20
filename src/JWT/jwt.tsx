import React from "react";
import { jwtDecode } from "jwt-decode";
async function getData() {
  let data = { username: "gajananbodhankar", password: "123456" };
  try {
    let response = await fetch("http://13.201.64.128:8082/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    // YOu will get a
    // res.token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhamFuYW5ib2RoYW5rYXIiLCJpYXQiOjE3MDU3Mzg1MTIsImV4cCI6MTcwNTc2MDExMn0.X7UtYBDW2bKcknr5WEvUXBzCxT0A-oM7YLaGItUNu8E"
    // Date.now()-> gives current time in MS from jan-1970. If we divide by 1000 then it gets converted to seconds
    // exp - (Date.now()/1000) gives 21592 seconds which is 6 hrs
    // But setTimeout always takes MS,  hence setTimeOut(()=>{ logout()  },exp)
    let res = await response.json();
    if (res.success) {
      let t = jwtDecode(res.token);
      console.log(t, jwtDecode(res.token).exp - Math.floor(Date.now() / 1000));
    } else {
      throw new Error(res.message);
    }
  } catch (e) {
    console.log(e.message);
  }
}

function Jwt() {
  return (
    <>
      <button onClick={getData}>Call</button>
    </>
  );
}

export default Jwt;

// http://13.201.64.128:8082/api/v1/auth/login
