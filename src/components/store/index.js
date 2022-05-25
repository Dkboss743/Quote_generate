import commentReducer from "./comments";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
});
export default store;
