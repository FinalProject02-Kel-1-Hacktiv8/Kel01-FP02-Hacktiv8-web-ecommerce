import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";
import productsReducers from "../slice/slice-products";
import userReducers from "../slice/slice-token";
import cartReducers from "../slice/slice-cart";
import updateProductReducers from "../slice/slice-update";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducers = combineReducers({
  products: productsReducers,
  users: userReducers,
  cart: cartReducers,
  updateProduct: updateProductReducers,
});

const persist = persistReducer(persistConfig, rootReducers);

const store = () =>
  configureStore({
    reducer: persist,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

export const wrapper = createWrapper(store);
