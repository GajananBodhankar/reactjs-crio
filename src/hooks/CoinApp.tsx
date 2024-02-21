import axios from "axios";
import React, { useEffect, useState } from "react";

function CoinApp() {
  const [coins, setCoins] = useState();
  const [changed, setChanged] = useState();
  async function getApicall() {
    let response = await axios.get("https://api.coincap.io/v2/assets");
    if (coins) {
      let less = response.data.data
        .filter((i, j) => j < 50)
        .filter((i, j) =>
          coins.find(
            (element) =>
              element.name == i.name &&
              Number(element.priceUsd).toFixed(2) <
                Number(i.priceUsd).toFixed(2)
          )
        );
      let more = response.data.data
        .filter((i, j) => j < 50)
        .filter((i, j) =>
          coins.find(
            (element) =>
              element.name == i.name &&
              Number(element.priceUsd).toFixed(2) >
                Number(i.priceUsd).toFixed(2)
          )
        );
      if (less.length != 0 || more.length != 0) {
        setCoins(response.data.data.filter((i, j) => j < 50));
      }
      less = less.map((i) => ({ name: i.name, color: "green" }));
      more = more.map((i) => ({ name: i.name, color: "red" }));
      console.log(less.concat(more));
      setChanged(less.concat(more));
    }
  }
  async function firstCall() {
    let response = await axios.get("https://api.coincap.io/v2/assets");
    setCoins(response.data.data.filter((i, j) => j < 50));
  }
  useEffect(() => {
    firstCall();
  }, []);
  useEffect(() => {
    let x = setTimeout(() => {
      getApicall();
    }, 500);
    return () => clearTimeout(x);
  });
  return (
    <div>
      {coins
        ? coins.map((i, j) => {
            if (changed?.find((ele) => ele.name == i.name)) {
              let color = changed?.find((ele) => ele.name == i.name).color;
              return (
                <p key={i.id} style={{ backgroundColor: color }}>
                  {i.name} - {i.priceUsd} - {i.marketCapUsd}
                </p>
              );
            } else {
              return (
                <p key={i.id}>
                  {" "}
                  {i.name} - {i.priceUsd} - {i.marketCapUsd}
                </p>
              );
            }
          })
        : null}
    </div>
  );
}

export default CoinApp;
