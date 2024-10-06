import { configureStore } from '@reduxjs/toolkit'
import { logoReducer } from './logoSlice'
import { cutawaysReducer } from './cutawaysSlice'
import { notebooksAndMenuReducer } from './notebooksAndMenuSlice'
import { flyersReducer } from './flyersSlice'
import { diplomasAndCertificatesReducer } from './diplomasAndCertificatesSlice'
import { infographicsPostsStoriesReducer } from './infographicsPostsStoriesSlice'

export const store = configureStore({
  reducer: {
    logo: logoReducer,
    cutaways: cutawaysReducer,
    notebooksAndMenu: notebooksAndMenuReducer,
    flyers: flyersReducer,
    diplomasAndCertificates: diplomasAndCertificatesReducer,
    infographicsPostsStories: infographicsPostsStoriesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
