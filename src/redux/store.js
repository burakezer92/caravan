import { configureStore } from "@reduxjs/toolkit";
import caravanSlice from "./caravanSlice";

export const store = configureStore({
  reducer: {
    caravans: caravanSlice,
  },
});
