import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Bla Bla Bla 1",
    content:
      "Nothing to say man. please nothing to say. try to understand man. 1",
  },
  {
    id: 22,
    title: "Bla Bla Bla 22",
    content:
      "Nothing to say man. please nothing to say. try to understand man. 22",
  },
  {
    id: 333,
    title: "Bla Bla Bla 333",
    content:
      "Nothing to say man. please nothing to say. try to understand man. 333",
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
