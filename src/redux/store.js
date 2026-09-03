import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import likeSlice from "./likeSlice.js";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    like: likeSlice,
  },
});
