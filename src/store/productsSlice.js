import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../services/data";

initialState = { data: null };

const fetchData = createAsyncThunk("data/fetch", async () => {
  const res = await data;
  const finalData = await res.json();

  return finalData;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchData.fulfilled]: (state) => {
      state.data = state.payload;
    },
  },
});
