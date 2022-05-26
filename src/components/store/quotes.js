import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quotes: [
    {
      id: 12,
      author: "Steve Jobs",
      text: "Stay Hungry. Stay Foolish.",
    },
    {
      id: 13,
      author: "Pablo Picasso",
      text: "Good Artists Copy, Great Artists Steal",
    },
    {
      id: 14,
      author: "Oscar Wilde",
      text: "Be yourself; everyone else is already taken.",
    },
    {
      id: 15,
      author: "Leonardo Da Vinci",
      text: "Simplicity is the ultimate sophistication.",
    },
  ],
};
const quotesSlice = createSlice({
  name: "quotes",
  initialState: initialState,
  reducers: {
    addQuotes(state, action) {
      state.quotes.push(action.payload);
    },
  },
});
export const quotesAction = quotesSlice.actions;
export default quotesSlice.reducer;
