import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import sliceProducts from "../slice/slice-products";

const rootReducers = combineReducers({
  products: sliceProducts,
});

const store = () =>
  configureStore({
    reducer: rootReducers,
  });

export const wrapper = createWrapper(store);
