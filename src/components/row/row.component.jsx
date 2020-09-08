import React, { useState, useEffect } from "react";
import instance from "../../axios";

function Row({ getUrl }) {
  const [shows, setShows] = useState([]);

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
      <div className="row__images">This is where images go</div>
    </div>
  );
}

export default Row;
