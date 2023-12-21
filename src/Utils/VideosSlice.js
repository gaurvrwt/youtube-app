import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
  name: "videos",
  initialState: [],
  reducers: {
    updateVideos: (state, action) => [...action.payload],
  },
});

export const { updateVideos } = VideoSlice.actions;
export default VideoSlice.reducer;
