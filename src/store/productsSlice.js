import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../services/data";

export const fetchData = createAsyncThunk("data/fetch", async () => {
  const res = await fetch("src/products.json");
  const finalData = await res.json();
  return finalData;
});

const productsReducer = createSlice({
  name: "products",
  initialState: { PureData: [] },

  extraReducers: (builder) =>
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.PureData = action.payload;
    }),
});

export default productsReducer.reducer;
