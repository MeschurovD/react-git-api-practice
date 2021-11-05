//import { useTypeDispatch } from './../hooks/redux';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from "../firebase";
import { setUser } from '../reducers/authSlice';

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

export const getLoginAction: GetAuthType = async (email, password, dispatch) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    console.log(user)
    //@ts-ignore
    dispatch(setUser({email: user.email, token: user.accessToken, id: user.uid}))
  } catch (error) {
    console.log(error)
  }
}

export const getRegistrationAction: GetAuthType = async (email, password, dispatch) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    console.log(user)
    //@ts-ignore
    dispatch(setUser({email: user.email, token: user.accessToken, id: user.uid}))
  } catch (error) {
    console.log(error)
  }
}