import commentReducer from "./comments";
import quotesReducer from "./quotes";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    comments: commentReducer,
    quotes: quotesReducer,
  },
});
export default store;
