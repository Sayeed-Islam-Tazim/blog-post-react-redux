import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Bla Bla Bla 1",
    content:
      "Nothing to say man. please nothing to say. try to understand man. 1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 22,
    title: "Bla Bla Bla 22",
    content:
      "Nothing to say man. please nothing to say. try to understand man. 22",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: 333,
    title: "Bla Bla Bla 333",
    content:
      "Nothing to say man. please nothing to say. try to understand man. 333",
    date: sub(new Date(), { minutes: 3 }).toISOString(),
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
