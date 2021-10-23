import { createUserWithEmailAndPassword } from "@firebase/auth";
//import { async } from "@firebase/util";
import { auth } from "../../firebase";


interface SignUpType {
  (email: string, password: string): void
}

interface SignInType {
  (email: string, password: string): void
}

const signUpFirebase: SignUpType = async (email, password) => {
  const user = createUserWithEmailAndPassword(auth, email, password)
  console.log(user);
  
}

const signInFirebase: SignInType = async (email, password) => {
  
}

