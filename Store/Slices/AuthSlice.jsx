import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  userToken: "",
  userEmail: "",
  isAuthenticated: localStorage.getItem("userinfo") != null ? true : false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      console.log("action_________", action.payload);
      state.userInfo = action.payload;
      state.userToken = action.payload.accessToken;
      state.userEmail = action.payload.email;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.userToken = null;
      state.userInfo = {};
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
