import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tokenReducers from "../slice/token-slice";
import productReducers from "../slice/product-slice";
import updateReducers from "../slice/update-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducers = combineReducers({
  token: tokenReducers,
  product: productReducers,
  update: updateReducers,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persist = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
