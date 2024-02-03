import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SUGGESTIONS_API, YOUTUBE_VIDEO_SEARCH_API } from "../Utils/Config";
import { cacheResults } from "../Utils/searchSlice";
import { updateVideos } from "../Utils/VideosSlice";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const [willGetData, setWillGetData] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchList(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await axios.get(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const data =  getRefinedSearchData(response.data);
    setSearchList(data);
    dispatch(
      cacheResults({
        [searchQuery]: data,
      })
    );
  };

  const getRefinedSearchData = (responseString)=>{
  const startIndex = responseString.indexOf('([') + 1;
const endIndex = responseString.lastIndexOf('])') + 1;
const jsonString = responseString.substring(startIndex, endIndex);
const jsonData = JSON.parse(jsonString);

const suggestions = jsonData[1].map(suggestion => suggestion[0]);
return suggestions;
  }

  const toggleSidebar = () => {
    console.log("inside func");
    dispatch(toggleMenu());
  };

  const getSearchVideosData = async () => {
    const response = await fetch(YOUTUBE_VIDEO_SEARCH_API + searchQuery);
    const parsedData = await response.json();
    dispatch(updateVideos(parsedData?.items));
    console.log(parsedData?.items, "parsed");
  };

  const setClickedSearch = (str) => {
    console.log(str, "sett");
    setSearchQuery(str);
    setWillGetData(true);
  };

  useEffect(() => {
    willGetData && getSearchVideosData();
    setWillGetData(false);
    // eslint-disable-next-line
  }, [willGetData]);

  return (
    <div className="grid grid-flow-col p-2 h-16 shadow-lg mt-2">
      <div className="flex align-middle col-span-2">
        <img
          className="w-10 h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="Hamburger"
          onClick={toggleSidebar}
        />
        <a href="/">
          <img
            className="w-32 h-10 pl-4 cursor-pointer "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            alt="Youtube Icon"
          />
        </a>
      </div>
      <div className="col-span-8 flex justify-center align-middle">
        <div>
          <input
            className="w-80 p-2 border-2 rounded-lg h-[40px]"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchVisible(true)}
            onBlur={() => {
              setSearchVisible(false);
            }}
          />
          <span
            onClick={getSearchVideosData}
            className="py-2 px-2 border-2 rounded-lg w-12 cursor-pointer"
          >
            🔎
          </span>
          {searchQuery && searchList.length > 0 && searchVisible &&(
            <div className="shadow-md bg-white absolute w-[24%] p-2 rounded-md">
              <ul>
                {searchList?.map((val) => (
                  <li
                    onMouseDown={() => setClickedSearch(val)}
                    key={val}
                    className="shadow-sm p-4 cursor-pointer hover:bg-slate-300 rounded-md"
                  >
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end col-span-2">
        <span>Profile</span>
      </div>
    </div>
  );
};

export default Header;
