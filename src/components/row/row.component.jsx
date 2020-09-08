import React, { useState, useEffect } from "react";
import instance from "../../axios";

import RowItem from "../row-item/row-item.component";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ getUrl }) {
  const [shows, setShows] = useState([]);

  //Gets and updates shows object corresponding to getUrl
  useEffect(() => {
    async function getData() {
      const request = await instance.get(getUrl);
      setShows(request.data.results);
    }
    getData();
  }, [getUrl]);
  console.log(shows);
  return (
    <div className="row">
      This is a row
      <div className="row__slider">
        This is where images go
        {shows.map((value) => (
          <RowItem
            key={value.id}
            showData={value}
            imageUrl={`${imageBaseUrl}${value.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
