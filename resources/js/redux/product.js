import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: {}
  },
  reducers: {
    setProduct: (state, action) => {
      console.log(action.payload)
      state.value = action.payload;
    }
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;