
//<--------------------IMPORT-------------------------->
import React, { useState } from 'react';
import { useTypeDispatch, useTypeSelector } from '../../../../hooks/redux';
import { handlingError } from '../../../../reducers/authSlice';
import styles from './register-header.module.scss'

interface PropsType {
  setReg: (reg: boolean) => void
  setCheckFirstDownload: Function
}
//<--------------------COMPONENT----------------------->
const RegisterHeader: React.FC<PropsType> = (props) => {


//<--------------------DATA AND STATES----------------->
  const { setReg } = props
  const [signIn, setSignIn] = useState(styles.disable)
  const [signOn, setSignUp] = useState(`${styles.registerHeader__singActive} ${styles.btn_color_1}`)

  const errorAuth = useTypeSelector(state => state.auth.error)
  const dispatch = useTypeDispatch()


//<--------------------HANDLERS------------------------>
  const onClickSignUp = () => {
    if (errorAuth) {
      dispatch(handlingError(null))
    }
    props.setCheckFirstDownload(true)
    setReg(false)
    setSignIn(`${styles.registerHeader__singActive} ${styles.btn_color_2}`)
    setSignUp(styles.disable)
  }

  const onClickSignIn = () => {
    if (errorAuth) {
      dispatch(handlingError(null))
    }
    setReg(true)
    setSignIn(styles.disable)
    setSignUp(`${styles.registerHeader__singActive} ${styles.btn_color_1}`)
  }


  //<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.registerHeader}>
      <div className={styles.registerHeader__logo}>
        <i className='bx bxl-github' ></i>
      </div>
      <div className={styles.registerHeader__wrapper}>
        <button className={signIn} onClick={onClickSignIn} >Sing in</button>
        <button className={signOn} onClick={onClickSignUp} >Sing up</button>
      </div>
    </div>
  );
};

export default RegisterHeader;