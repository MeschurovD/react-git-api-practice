import { ActionCurrentPageType, ReposReducerStateType } from './reducersType/reposReducersType';
import { createSlice } from "@reduxjs/toolkit";

const initialState: ReposReducerStateType = {
  reposList: [{}],
  isFetching: true,
  currentPage: 1,
  totalCount: 0,
  error: null
}

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setCurrentPage: (state, action: ActionCurrentPageType) => {
      state.currentPage = action.payload.page
    }
  },

})

export default reposSlice.reducer
export const {setCurrentPage} = reposSlice.actions