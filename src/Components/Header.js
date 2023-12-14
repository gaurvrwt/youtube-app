import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/Config";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const searchCache = useSelector((store) => store.search);

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
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsondata = await data.json();
    setSearchList(jsondata[1]);
    dispatch(
      cacheResults({
        [searchQuery]: jsondata[1],
      })
    );
    console.log(jsondata, searchQuery, "searched");
  };

  const toggleSidebar = () => {
    console.log("inside func");
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 h-16 shadow-lg mt-2">
      <div className="flex align-middle col-span-2">
        <img
          className="w-10 h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="Hamburger"
          onClick={toggleSidebar}
        />
        <img
          className="w-32 h-10 pl-4 cursor-pointer "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt="Youtube Icon"
        />
      </div>
      <div className="col-span-8 flex justify-center align-middle">
        <div>
          <input
            className="w-80 border-2 rounded-lg h-[40px]"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchVisible(true)}
            onBlur={() => {
              setSearchVisible(false);
            }}
          />
          <span className="py-2 px-2 border-2 rounded-lg w-12 cursor-pointer">
            🔎
          </span>
          {searchVisible && (
            <div className="shadow-md bg-white absolute w-[24%] p-2 rounded-md">
              <ul>
                {searchList?.map((val) => (
                  <li key={val} className="shadow-sm p-4 hover:bg-gray-50">
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
