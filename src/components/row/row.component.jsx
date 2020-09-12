import React, { useState, useEffect } from "react";
import instance from "../../axios";
import "../../sass/components/row.scss";

import RowItem from "../row-item/row-item.component";

const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

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
        {
          //Creates poster for each show
          shows.map((value) =>
            //Only creates poster if there is a valid poster url
            value.poster_path ? (
              <RowItem
                key={value.id}
                showData={value}
                imageUrl={`${imageBaseUrl}${value.poster_path}`}
              />
            ) : null
          )
        }
      </div>
    </div>
  );
}

export default Row;
