import React from "react";

const VideoCard = ({ snippet, statistics }) => {
  return (
    <div className="w-72 shadow-lg rounded-lg">
      <img
        className="w-96 p-2 rounded-[7%]"
        src={snippet?.thumbnails?.high?.url}
        alt="thumbnail"
      />
      <h3 className="overflow-hidden">{snippet?.title}</h3>
      <h3 className="bold">{snippet?.channelTitle}</h3>
      <h3 className="bold">{statistics?.viewCount} views</h3>
      <h3 className="bold">{new Date(snippet?.publishedAt).toDateString()}</h3>
    </div>
  );
};

export default VideoCard;
