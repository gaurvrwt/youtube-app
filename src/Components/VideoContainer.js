import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/Config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [youtubeVideoList, setYoutubeVideoList] = useState([]);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    setYoutubeVideoList(jsonData?.items);
    console.log(jsonData, "data");
  };

  const buttonsNames = [
    "All",
    "Music",
    "Mixes",
    "Chillout",
    "Bodybuiding",
    "Diet",
    "Live",
    "ComputerSience",
    "Jazz",
    "Gadgets",
    "News",
    "Podcast",
  ];
  return (
    <div className="px-4">
      <div className="buttons flex gap-4 ml-3 mt-2 overflow-hidden">
        {buttonsNames.map((btn, i) => (
          <button
            className="shadow-lg py-2 pt-3 px-4 rounded-md text-center"
            key={i}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-6">
        {youtubeVideoList.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard {...video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
