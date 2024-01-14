import { configureStore } from "@reduxjs/toolkit";
import { logoReducer } from "./logoSlice";

export const store = configureStore({
  reducer: {
    logo: logoReducer
  },
})
