import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import instance from "../../axios.js";
import { API_KEY } from "../../requests.js";

import "../../sass/components/video-player.scss";

function VideoPlayer({ showId, videoOptions }) {
  const [videoKey, setVideoKey] = useState();
  const [sorryMessage, setSorryMessage] = useState("");
  //Retrieves youtube video key from tmdb
  useEffect(() => {
    async function getData() {
      //For some movies no details can be found
      try {
        const request = await instance.get(
          `/movie/${showId}/videos?api_key=${API_KEY}&language=en-US`
        );
        //Sometimes the array containing the youtube key is empty
        if (request.data.results.length) {
          setVideoKey(request.data.results[0].key);
          return;
        }
        setSorryMessage("Sorry but there is no video! D:");
      } catch {
        setSorryMessage("Sorry but there is no video! D:");
      }
    }
    getData();
  });
  return (
    <div className="video-player">
      {
        //If videoKey is undefined
        videoKey ? (
          <Youtube videoId={videoKey} opts={videoOptions} />
        ) : (
          <span>{sorryMessage}</span>
        )
      }
    </div>
  );
}

export default VideoPlayer;
