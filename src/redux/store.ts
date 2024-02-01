import { configureStore } from '@reduxjs/toolkit'
import { logoReducer } from './logoSlice'
import { cutawaysReducer } from './cutawaysSlice'
import { notebooksAndMenuReducer } from './notebooksAndMenuSlice'

export const store = configureStore({
  reducer: {
    logo: logoReducer,
    cutaways: cutawaysReducer,
    notebooksAndMenu: notebooksAndMenuReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
