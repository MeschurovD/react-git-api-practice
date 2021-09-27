import { combineReducers } from "redux"
import { createStore, applyMiddleware } from "redux"
// @ts-ignore
import reposReducer from '../reducers/reposReducer.ts'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  repos: reposReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

