import { configureStore } from "@reduxjs/toolkit";
import { logoReducer } from "./logoSlice";
import { cutawaysReducer } from "./cutawaysSlice";

export const store = configureStore({
  reducer: {
    logo: logoReducer,
    cutaways: cutawaysReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
