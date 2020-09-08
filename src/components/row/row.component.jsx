import React, { useState, useEffect } from "react";
import instance from "../../axios";
import "../../sass/components/row.scss";

import RowItem from "../row-item/row-item.component";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

function Row({ getUrl, title }) {
  const [shows, setShows] = useState([]);

  //Gets and updates shows object corresponding to getUrl
  useEffect(() => {
    async function getData() {
      const request = await instance.get(getUrl);
      setShows(request.data.results);
    }
    getData();
  }, [getUrl]);
  //Creates a row item for each show in the shows array
  return (
    <div className="row">
      <h2 className="row__title"> {title}</h2>
      <div className="row__slidebar">
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
