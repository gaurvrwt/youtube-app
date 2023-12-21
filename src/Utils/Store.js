import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import VideosSlice from "./VideosSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    liveChat: chatSlice,
    videos: VideosSlice,
  },
});

export default store;
