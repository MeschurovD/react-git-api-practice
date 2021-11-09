import { AuthStateType } from './reducersType/authType';
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthStateType = {
  email: null,
  token: null,
  id: null,
  isAuth: false,
  error: null
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
      sessionStorage.removeItem('user')
      state.email = null
      state.token = null
      state.id = null
      state.isAuth = false
    },
    handlingError(state, action) {
      if (action.payload === 'auth/user-not-found') {
        state.error = 'Такого пользователя не существует'
      }
      if (action.payload === 'auth/email-already-in-use') {
        state.error = 'Такой email уже занят'
      }
      if (action.payload === 'auth/wrong-password') {
        state.error = 'Неверный пароль'
      }
      if (!action.payload) {
        state.error = null
      }
      //state.error = action.payload
    }
  }
})

export const { setUser, removeUser, handlingError } = authSlice.actions
export default authSlice.reducer