import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import "./swiperStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperStyle.css";
import { Chip } from "@mui/material";
async function name(data, setData) {
  try {
    let response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    if (response.status === 200) {
      setData(response.data);
      console.log(response.data);
    }
  } catch (e) {
    return e;
  }
}

function check(setSize) {
  if (window.innerWidth < 768) {
    setSize(20);
  } else if (window.innerWidth > 768 && window.innerWidth < 1600) {
    setSize(70);
  } else if (window.innerWidth > 200) {
    setSize(200);
  }
}

function SwiperComponent() {
  const [data, setData] = useState<Array<any>>([]);
  const [size, setSize] = useState(70);
  const [showAll, setShowAll] = useState<boolean>(false);
  useEffect(() => {
    name(data, setData);
    console.log(window.innerWidth);
    check(setSize);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      check(setSize);
    });
  }, [check]);
  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => setShowAll(!showAll)}>ShowAll</button>
      {!showAll ? (
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          spaceBetween={size}
          slidesPerView={7}
          navigation={true}
          virtual
        >
          {data?.length &&
            data?.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="card">
                    <img src={item.image} alt="" />
                    <Chip
                      label={item.follows}
                      variant="filled"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        display: "flex",
                        alignSelf: "flex-start",
                      }}
                    />
                  </div>
                  <p style={{ color: "white", padding: 0, textAlign: "left" }}>
                    {item.title}
                  </p>
                </SwiperSlide>
              );
            })}
        </Swiper>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            columnGap: 70,
            marginTop: 20,
          }}
        >
          {data?.length &&
            data?.map((item, index) => (
              <div
                style={{ display: "flex", flexDirection: "column", width: 150 }}
              >
                <div className="card">
                  <img src={item.image} alt="" />
                  <Chip
                    label={item.follows}
                    variant="filled"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      display: "flex",
                      alignSelf: "flex-start",
                    }}
                  />
                </div>
                <p style={{ color: "white", padding: 0, textAlign: "left" }}>
                  {item.title}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SwiperComponent;
