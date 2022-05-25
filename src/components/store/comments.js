import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  comments: {
    id: [],
  },
};
const commentSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    addAComment(state, action) {
      const ido = action.payload.id;
      if (state.comments[ido]) {
        state.comments[ido].push(action.payload.comment);
      } else {
        state.comments[ido] = [action.payload.comment];
      }
    },
  },
});
export const commentAction = commentSlice.actions;
export default commentSlice.reducer;
