
//<--------------------IMPORT-------------------------->
import React, { useState } from 'react';

import './register-header.scss'

interface PropsType {
  reg: boolean
  setReg: (reg: boolean) => void
  setCheck: Function
}
//<--------------------COMPONENT----------------------->
const RegisterHeader: React.FC<PropsType> = (props) => {

  const {reg, setReg} = props
  const [signIn, setSignIn] = useState('disable')
  const [signOn, setSignUp] = useState('register-header__sing-active btn-color-1')

  const onClickSignUp = () => {
    props.setCheck(true)
    console.log('click')
    setReg(false)
    setSignIn('register-header__sing-active btn-color-2')
    setSignUp('disable')
  }

  const onClickSignIn = () => {
    console.log('click')
    setReg(true)
    setSignIn('disable')
    setSignUp('register-header__sing-active btn-color-1')
  }

  

//<--------------------JSX COMPONENT------------------->
  return (
    <div className='register-header'>
      <div className="register-header__logo">Logo</div>
      <div className="register-header__wrapper">
        <button className={signIn} onClick={onClickSignIn} >Sing in</button>
        <button className={signOn} onClick={onClickSignUp} >Sing up</button>
      </div>
    </div>
  );
};

export default RegisterHeader;