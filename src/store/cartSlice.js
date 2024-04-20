import { createSlice } from "@reduxjs/toolkit";

function AddProduct(product) {}

function RemoveProduct(product) {}

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    AddProduct,
    RemoveProduct,
  },
});

export const { AddProduct: add, RemoveProduct: remove } = cartReducer.actions;
export default cartReducer.reducer;
