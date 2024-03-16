import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../services/data";

export const fetchData = createAsyncThunk("data/fetch", async () => {
  const res = await fetch("src/products.json");
  const finalData = await res.json();
  return finalData;
});

const productsReducer = createSlice({
  name: "products",
  initialState: { data: [] },

  extraReducers: (builder) =>
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    }),
});

export default productsReducer.reducer;
