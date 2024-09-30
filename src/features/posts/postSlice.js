import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Bla Bla Bla 1",
    content:
      "Nothing to say man. please nothing to say. try to understand man. 1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      heart: 0,
      love: 0,
      funny: 0,
      sad: 0,
    },
  },
  {
    id: 22,
    title: "Bla Bla Bla 22",
    content:
      "Nothing to say man. please nothing to say. try to understand man. 22",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      heart: 0,
      love: 0,
      funny: 0,
      sad: 0,
    },
  },
  {
    id: 333,
    title: "Bla Bla Bla 333",
    content:
      "Nothing to say man. please nothing to say. try to understand man. 333",
    date: sub(new Date(), { minutes: 3 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      heart: 0,
      love: 0,
      funny: 0,
      sad: 0,
    },
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
            reactions: {
              thumbsUp: 0,
              heart: 0,
              love: 0,
              funny: 0,
              sad: 0,
            },
          },
        };
      },
    },
    addReaction: {
      reducer(state, action) {
        const { postId, reaction } = action.payload;
        const existingPost = state.posts.find((post) => postId === post.id);
        if (existingPost) {
          existingPost.reactions[reaction]++;
        }
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost, addReaction } = postSlice.actions;

export default postSlice.reducer;
