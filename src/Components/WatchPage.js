import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu } from "../Utils/appSlice";
import { addMessage } from "../Utils/chatSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveComments from "./LiveComments";
// import YOTUBE_CHAT from "../Utils/YOUTUBE_CHAT.json";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const liveChatData = useSelector((store) => store.liveChat);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    dispatch(hideMenu());
    // eslint-disable-next-line
  }, []);

  const sendChat = () => {
    dispatch(
      addMessage({
        name: 'User Name',
        commentText: newComment,
      })
    );
    setNewComment("");
  };

  return (
    <div className="w-full">
      <div className="flex">
        <div className="px-5 mt-4 w-[65%]">
          <iframe
            width="900"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-[35%] border-2 rounded-md m-3 p-2 bg-gray-100">
          <div className="h-80 overflow-y-scroll flex flex-col-reverse">
            {liveChatData.map((val, index) => (
              <LiveComments key={index} {...val} />
            ))}
          </div>
          <div className="h-[10%] mt-4">
            <input
              type="text"
              className="w-[75%] p-1"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={sendChat}
              className="w-[20%] p-1 ml-2 border-2 rounded-lg bg-sky-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div>
        <CommentsContainer videoId={searchParam.get("v")} />
      </div>
    </div>
  );
};

export default WatchPage;
