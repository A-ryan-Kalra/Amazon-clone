import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/channelSlice";
import counterSlice from "./features/counterSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: counterSlice,
  },
});
