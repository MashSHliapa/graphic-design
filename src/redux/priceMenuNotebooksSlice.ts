import { createSlice } from '@reduxjs/toolkit'
import { DataInitialState } from '../types/interfaces'
// import { requestNotebooksAndMenu } from '../services/posts'
import price1 from '../images/notebooks/price1.jpg'
import price2 from '../images/notebooks/price2.jpg'
import price3 from '../images/notebooks/price3.jpg'
import menu1 from '../images/notebooks/menu/menu1.jpg'
import menu2 from '../images/notebooks/menu/menu2.jpg'
import menu3 from '../images/notebooks/menu/menu3.jpg'
import menu4 from '../images/notebooks/menu/menu4.jpg'
import menu5 from '../images/notebooks/menu/menu5.jpg'
import menu6 from '../images/notebooks/menu/menu6.jpg'
import menu7 from '../images/notebooks/menu/menu7.jpg'
import menu8 from '../images/notebooks/menu/menu8.jpg'
import menu9 from '../images/notebooks/menu/menu9.jpg'
import menu10 from '../images/notebooks/menu/menu10.jpg'
import menu11 from '../images/notebooks/menu/menu11.jpg'
import menu12 from '../images/notebooks/menu/menu12.jpg'
import notebook1 from '../images/notebooks/notebook1.jpg'
import notebook2 from '../images/notebooks/notebook2.jpg'
import notebook3 from '../images/notebooks/notebook3.jpg'
import notebook4 from '../images/notebooks/notebook4.jpg'
import notebook5 from '../images/notebooks/notebook5.jpg'
import notebook6 from '../images/notebooks/notebook6.jpg'

// const fetchNotebooksAndMenu = createAsyncThunk('notebooksAndMenu/fetchNotebooksAndMenu', async () => {
//   return await requestNotebooksAndMenu()
// })

const priceMenuNotebooksSlice = createSlice({
  name: "priceMenuNotebooks",
  initialState: {
    // loading: false,
    // error: null,
    data: [
      {
        id: 1,
        image: price1,
      },
      {
        id: 2,
        image: price2,
      },
      {
        id: 3,
        image: price3,
      },
      {
        id: 4,
        image: menu1,
      },
      {
        id: 5,
        image: menu2,
      },
      {
        id: 6,
        image: menu3,
      },
      {
        id: 7,
        image: menu4,
      },
      {
        id: 8,
        image: menu5,
      },
      {
        id: 9,
        image: menu6,
      },
      {
        id: 10,
        image: menu7,
      },
      {
        id: 11,
        image: menu8,
      },
      {
        id: 12,
        image: menu9,
      },
      {
        id: 13,
        image: menu10,
      },
      {
        id: 14,
        image: menu11,
      },
      {
        id: 15,
        image: menu12,
      },

      {
        id: 16,
        image: notebook1,
      },
      {
        id: 17,
        image: notebook2,
      },
      {
        id: 18,
        image: notebook3,
      },
      {
        id: 19,
        image: notebook4,
      },
      {
        id: 20,
        image: notebook5,
      },
      {
        id: 21,
        image: notebook6,
      },
    ]
  } as DataInitialState,
  reducers: {},
  // extraReducers: builder => {
  //   builder.addCase(fetchNotebooksAndMenu.pending, state => {
  //     state.loading = true
  //   })
  //   builder.addCase(fetchNotebooksAndMenu.fulfilled, (state, action) => {
  //     state.loading = false
  //     state.data = action.payload
  //   })
  //   builder.addCase(fetchNotebooksAndMenu.rejected, state => {
  //     state.loading = false
  //     state.error = 'что-то не так'
  //   })
  // },
})


// export { fetchNotebooksAndMenu }
export const priceMenuNotebooksReducer = priceMenuNotebooksSlice.reducer

