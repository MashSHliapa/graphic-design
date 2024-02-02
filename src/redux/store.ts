import { configureStore } from '@reduxjs/toolkit'
import { logoReducer } from './logoSlice'
import { cutawaysReducer } from './cutawaysSlice'
import { notebooksAndMenuReducer } from './notebooksAndMenuSlice'
import { flyersReducer } from './flyersSlice'
import { diplomasAndCertificatesReducer } from './diplomasAndCertificatesSlice'

export const store = configureStore({
  reducer: {
    logo: logoReducer,
    cutaways: cutawaysReducer,
    notebooksAndMenu: notebooksAndMenuReducer,
    flyers: flyersReducer,
    diplomasAndCertificates: diplomasAndCertificatesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
