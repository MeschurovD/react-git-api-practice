import { ActionCurrentPageType, ReposReducerStateType } from './reducersType/reposReducersType';
import { createSlice } from "@reduxjs/toolkit";

const initialState: ReposReducerStateType = {
  reposList: [{}],
  isFetching: true,
  currentPage: 1,
  totalCount: 0,
  error: null,
  currentRepo: null
}

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setCurrentPage: (state, action: ActionCurrentPageType) => {
      state.currentPage = action.payload.page
    },
    setCurrentRepo: (state, action) => {
      state.currentRepo = action.payload.currentRepo
    }
  },

})

export default reposSlice.reducer
export const {setCurrentPage, setCurrentRepo} = reposSlice.actions