import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    userInfoList: [""],
    receiverId: "",
  },
  reducers: {
    loadUsers: (state, action) => {
      state.userInfoList = action.payload;
    },
    changeReceiver: (state, action) => {
      state.receiverId = action.payload;
    },
  },
});

export const { loadUsers, changeReceiver } = chatSlice.actions;

export default chatSlice.reducer;
