
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { reposFetch } from "../reducers/actions/reposApi"
import reposSlice from "../reducers/reposSlice"
import searchSlice from "../reducers/searchSlice"


const rootReducer = combineReducers({
  repos: reposSlice,
  search: searchSlice,
  [reposFetch.reducerPath]: reposFetch.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDafaultMiddleware) => getDafaultMiddleware().concat(reposFetch.middleware)
  })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

