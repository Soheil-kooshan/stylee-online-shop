import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  productReducer,
  cartReducer
);

const store = configureStore({
  reducer: persistReducer,
  devTools: process.env.NODE_ENV !== "produvtion",
  middleware: thunk,
});

export const persist = persistStore(store);
