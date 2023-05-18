import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import sliceProducts from "../slice/slice-products";
import cartReducers from "../slice/slice-cart";

const rootReducers = combineReducers({
  products: sliceProducts,
  cart: cartReducers,
});

const store = () =>
  configureStore({
    reducer: rootReducers,
  });

export const wrapper = createWrapper(store);
