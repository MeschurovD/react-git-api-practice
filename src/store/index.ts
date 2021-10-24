// import { combineReducers } from "redux"
// import { createStore, applyMiddleware } from "redux"
// import reposReducer from '../reducers/reposReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from "redux-thunk"

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { reposFetch } from "../reducers/actions/reposApi"
import reposSlice from "../reducers/reposSlice"

// const rootReducer = combineReducers({
//   repos: reposReducer,
// })

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const rootReducer = combineReducers({
  repos: reposSlice,
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

