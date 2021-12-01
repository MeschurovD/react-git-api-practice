import React, { useEffect, useState } from 'react';
import isValidate, { StatusValidation } from '../../../../utils/isValidate';
import styleHelper from './styleHelper';
//@ts-ignore
import { useHistory } from 'react-router-dom'
import styles from './panel.module.scss'
import stylesReg from '../../registration.module.scss'
import { getLoginAction, getRegistrationAction } from '../../../../action/authAction';
import { useTypeDispatch, useTypeSelector } from '../../../../hooks/redux';


interface PropsType {
  reg: boolean
  checkFirstDownload: boolean
}

//<--------------------COMPONENT----------------------->
const RegisterPanel: React.FC<PropsType> = ({ reg, checkFirstDownload }) => {

  const dispatch = useTypeDispatch()
  const { push } = useHistory()
  const isAuth = useTypeSelector(state => state.auth.isAuth)
  const errorAuth = useTypeSelector(state => state.auth.error)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidInput, setInvalidInput] = useState<StatusValidation>(StatusValidation.TRUE)
  const headerTitle = reg ? 'login' : 'registration'
  const sign = reg ? 'Sing In' : 'Sing Up'

  if (isAuth) push('/main')

  const {
    btnStyle,
    testAccBtnStyle,
    headerStyle,
    inputStyleEmail,
    inputStylePassword,
  } = styleHelper(styles, reg, checkFirstDownload, invalidInput)


  //<--------------------HANDLERS------------------------>
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onClickSignButton = () => {
   
    const validate = isValidate(email, password)

    if (validate.status === StatusValidation.TRUE) {
      setInvalidInput(StatusValidation.TRUE)
      reg
        ? getLoginAction(email, password, dispatch)
        : getRegistrationAction(email, password, dispatch)
    }
    else {
      setInvalidInput(validate.status)
      setTimeout(() => {
        setInvalidInput(StatusValidation.TRUE)
      }, 1000)
    }
  }

  const onClickTestAccount = () => {
    setEmail('test1@gmail.com')
    setPassword('test12345')
  }

  //<--------------------JSX COMPONENT------------------->
  return (
    <div className={stylesReg.col}>
      <div className={styles.panel__column}>
        <div className={styles.panel__card}>
          <div className={headerStyle} >Github info - {headerTitle}</div>

          <div className={styles.panel__card_body}>
            <div>{errorAuth}</div>
            {/*---EMAIL---*/}
            <div className={styles.panel__card_body_title}>Email</div>
            <input
              type='email'
              className={inputStyleEmail}
              placeholder='Email'
              value={email}
              onChange={onChangeEmail}
            />
            {/*---PASSWORD---*/}
            <div className={styles.panel__card_body_title}>Password</div>
            <input
              type='password'
              className={inputStylePassword}
              placeholder='Password'
              value={password}
              onChange={onChangePassword}
            />
            {/*---PASSWORD CHECK---*/}
            {
              !reg &&
              <>
                <div className={styles.panel__card_body_title}>Password Check</div>
                <input type='password' className={inputStylePassword} placeholder='Password check' />
              </>
            }
            {/*---SIGN BUTTON---*/}
            <button className={btnStyle} onClick={onClickSignButton} >{sign}</button>
            {
              reg && <button className={testAccBtnStyle} onClick={onClickTestAccount}>Тестовый аккаунт</button>
            }
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;