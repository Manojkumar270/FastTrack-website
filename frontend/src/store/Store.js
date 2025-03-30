import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice/Cartslice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});
