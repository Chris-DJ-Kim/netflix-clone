import React, { useState, useEffect } from "react";
import instance from "../../axios.js";
import requests from "../../requests.js";
import "../../sass/components/banner.scss";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [bannerShow, setBannerShow] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await instance.get(requests.getTrending);

      setBannerShow(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    getData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${imageBaseUrl}${bannerShow.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      asdasdas
      <div className="banner__contents">asd</div>
    </div>
  );
}

export default Banner;
