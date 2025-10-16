import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice";
import PostsReducer from "./posts/PostsSlice";

export const storeApp =configureStore({
    reducer:{
        counterData:counterReducer ,
        postsData:PostsReducer,
    }
})