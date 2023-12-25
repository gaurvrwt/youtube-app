import React, { useEffect } from "react";
import { YOUTUBE_API } from "../Utils/Config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateVideos } from "../Utils/VideosSlice";

const VideoContainer = () => {
  // const [youtubeVideoList, setYoutubeVideoList] = useState([]);
  const youtubeVideoList = useSelector((store) => store.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    getYoutubeVideos();
    // eslint-disable-next-line
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    dispatch(updateVideos(jsonData?.items));
    console.log(jsonData?.items, "empty effect first");
    // setYoutubeVideoList(jsonData?.items);
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
    "News",
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
        {youtubeVideoList?.map((video) => (
          <Link
            key={typeof video.id === "object" ? video.id.videoId : video.id}
            to={
              "/watch?v=" + (typeof video.id === "object"
                ? video.id.videoId
                : video.id)
            }
          >
            <VideoCard {...video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
