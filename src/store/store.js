import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
