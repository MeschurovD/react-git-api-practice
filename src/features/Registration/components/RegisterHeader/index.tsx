
//<--------------------IMPORT-------------------------->
import React, { useState } from 'react';
//@ts-ignore
import styles from './register-header.module.scss'

interface PropsType {
  reg: boolean
  setReg: (reg: boolean) => void
  setCheckFirstDownload: Function
}
//<--------------------COMPONENT----------------------->
const RegisterHeader: React.FC<PropsType> = (props) => {


  const {reg, setReg} = props
  const [signIn, setSignIn] = useState(styles.disable)
  const [signOn, setSignUp] = useState(`${styles.registerHeader__singActive} ${styles.btn_color_1}`)

  const onClickSignUp = () => {
    props.setCheckFirstDownload(true)
    console.log('click')
    setReg(false)
    setSignIn(`${styles.registerHeader__singActive} ${styles.btn_color_2}`)
    setSignUp(styles.disable)
  }

  const onClickSignIn = () => {
    console.log('click')
    setReg(true)
    setSignIn(styles.disable)
    setSignUp(`${styles.registerHeader__singActive} ${styles.btn_color_1}`)
  }

  console.log(styles)

//<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.registerHeader}>
      <div className={styles.registerHeader__logo}>Logo</div>
      <div className={styles.registerHeader__wrapper}>
        <button className={signIn} onClick={onClickSignIn} >Sing in</button>
        <button className={signOn} onClick={onClickSignUp} >Sing up</button>
      </div>
    </div>
  );
};

export default RegisterHeader;