import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import chatReducer from "./Slices/ChatSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
});
