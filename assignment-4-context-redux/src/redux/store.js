import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// Redux store: cart state managed by Redux Toolkit
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});