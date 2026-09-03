  import { createSlice } from "@reduxjs/toolkit";
  const initialState = {
    value: [],
  };

  const likeSlice = createSlice({
    name: "LikeSlice",
    initialState,
    reducers: {
      addToLike: (state, action) => {
        const product = action.payload;
        const exsite = state.value.find((item) => item.id === product.id);
        if (exsite) {
          exsite.quantity += 1;
        } else {
          state.value.push({ ...product, quantity: 1 });
        }
      },
    },
  });

  export const { addToLike } = likeSlice.actions;
  export default likeSlice.reducer;
