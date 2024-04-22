import { createSlice } from "@reduxjs/toolkit";

function AddProduct(state, action) {
  state.products = [...state.products, action.payload];
}

function RemoveProduct(state, action) {}

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

export const { AddProduct: AddAction, RemoveProduct: RemoveAction } =
  cartReducer.actions;
export default cartReducer.reducer;
