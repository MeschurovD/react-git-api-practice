import { createSlice } from "@reduxjs/toolkit";



const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
    check: false
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload
    },
    setCheck: (state, action) => {
      state.check = action.payload
    }
  }
})

export default searchSlice.reducer
export const {setCheck, setSearch} = searchSlice.actions