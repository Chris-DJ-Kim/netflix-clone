import React, { useState, useEffect } from "react";
import instance from "../../axios.js";
import requests from "../../requests.js";

import CustomButton from "../custom-button/custom-button.component";

import "../../sass/components/banner.scss";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const videoBaseUrl = "https://www.youtube.com/watch?v=";

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
  //Used to display one or the other in case 'title' is not provided
  const { title, name, overview } = bannerShow;
  console.log(bannerShow);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${imageBaseUrl}${bannerShow.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="contents">
        <div className="contents__title">{title ? title : name}</div>
        <CustomButton>Watch Trailer</CustomButton>
        <CustomButton>Add to List</CustomButton>
        <div className="contents__description">{overview}</div>
      </div>
    </div>
  );
}

export default Banner;
