import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// State initial
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// 🔵 READ all posts
export const getAllPosts = createAsyncThunk("posts/getAll", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

// 🟢 CREATE post
export const addPost = createAsyncThunk("posts/add", async (newPost) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
  return res.data;
});

// 🟠 UPDATE post
export const updatePost = createAsyncThunk("posts/update", async (updatedPost) => {
  const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, updatedPost);
  return res.data;
});

// 🔴 DELETE post
export const deletePost = createAsyncThunk("posts/delete", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return id;
});

const PostsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // READ
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })

      // CREATE
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })

      // UPDATE
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.posts[index] = action.payload;
      })

      // DELETE
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(p => p.id !== action.payload);
      });
  },
});

export default PostsSlice.reducer;
