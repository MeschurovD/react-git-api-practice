import { ActionCurrentPageType, ReposReducerStateType } from './reducersType/reposReducersType';
import { createSlice } from "@reduxjs/toolkit";
import { getRepos } from './actions/reposAction';

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
  extraReducers: {
    [getRepos.pending.type]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getRepos.fulfilled.type]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.reposList = action.payload.items
      state.totalCount = action.payload.total_count
    },
    [getRepos.rejected.type]: () => {}
  }
})

export default reposSlice.reducer
export const {setCurrentPage} = reposSlice.actions