import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "liveChat",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.length > 20 ? state.pop() : state.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
