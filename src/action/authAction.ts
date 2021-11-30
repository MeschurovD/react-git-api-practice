//import { useTypeDispatch } from './../hooks/redux';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from "../firebase";
import { handlingError, setUser } from '../reducers/authSlice';

const app = initializeApp(firebaseConfig)

//const dispatch = useTypeDispatch()

interface GetAuthType {
  (
    email: string,
    password: string,
    dispatch: Function
  ): void
} 

const auth = getAuth()

//Вход
export const getLoginAction: GetAuthType = async (email, password, dispatch) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const userData = {
      email: user.email,
      //@ts-ignore
      token: user.accessToken,
      id: user.uid
    }
    sessionStorage.setItem('user', JSON.stringify(userData))
    dispatch(setUser(userData))
  } catch (error) {
    console.log(error.code)
    dispatch(handlingError(error.code))
  }
}

//Регистрация
export const getRegistrationAction: GetAuthType = async (email, password, dispatch) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    const userData = {
      email: user.email,
      //@ts-ignore
      token: user.accessToken,
      id: user.uid
    }
    sessionStorage.setItem('user', JSON.stringify(userData))
    dispatch(setUser(userData))
  } catch (error) {
    console.log(error.code)
    dispatch(handlingError(error.code))
  }
}