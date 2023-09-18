import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice";
import { apiSlice } from "./api/api";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
