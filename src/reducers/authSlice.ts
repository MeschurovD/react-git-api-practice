import { AuthStateType } from './reducersType/authType';
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthStateType = {
  email: null,
  token: null,
  id: null,
  isAuth: false
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      console.log(action)
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
      state.isAuth = true
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
      state.isAuth = false
    }
  }
})

export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer