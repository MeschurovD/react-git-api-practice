import React, { useEffect, useState } from 'react';
import isValidate, { StatusValidation } from '../../../../utils/isValidate';
import styleHelper from './styleHelper';

import './register-panel.scss'

interface PropsType {
  reg: boolean
  checkFirstDownload: boolean
}

//<--------------------COMPONENT----------------------->
const RegisterPanel: React.FC<PropsType> = ({ reg, checkFirstDownload }) => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidInput, setInvalidInput] = useState<StatusValidation>(StatusValidation.TRUE)


  // useEffect(() => {
  //   if (invalidInput) setInvalidInput(StatusValidation.TRUE)
  // }, [invalidInput])

  //<-----------------------STYLE------------------------>
  // const btnStyle = checkFirstDownload
  //   ? reg ? 'btn-sign-in btn-color-2 btn-anim-sign btn-sign-up-anim' : 'btn-sign-in btn-color-1 btn-anim-reg btn-sign-down-anim'
  //   : 'btn-sign-in btn-color-2 btn-anim-sign'
  // const headerStyle = reg ? 'panel__card-header text-color-2' : 'panel__card-header text-color-1'
  // const headerTitle = reg ? 'login' : 'registration'
  // const inputStyle = reg 
  //   ? 'input-r left' + (invalidInput ? '' : ' input-invalid-anim')
  //   : 'input-r right' + (invalidInput ? '' : ' input-invalid-anim')

  // const sign = reg ? 'Sing in' : 'Sing up'

  const {
    btnStyle,
    headerStyle,
    headerTitle,
    inputStyleEmail,
    inputStylePassword,
    sign
  } = styleHelper(reg, checkFirstDownload, invalidInput)

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
    }
    else {
      setInvalidInput(validate.status)
      setTimeout(() => {
        setInvalidInput(StatusValidation.TRUE)
      }, 1000)
    }


  }
  console.log(email + ' ' + password);

  //<--------------------JSX COMPONENT------------------->
  return (
    <div className="col">
      <div className='panel__column'>
        <div className="panel__card">
          <div className={headerStyle} >Github info - {headerTitle}</div>

          <div className="panel__card-body">
            {/*---EMAIL---*/}
            <div className="panel__card-body-title">Email</div>
            <input
              className={inputStyleEmail}
              placeholder='Email'
              value={email}
              onChange={onChangeEmail}
            />
            {/*---PASSWORD---*/}
            <div className="panel__card-body-title">Password</div>
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
                <div className="panel__card-body-title">Password Check</div>
                <input type='password' className={inputStylePassword} placeholder='Password check' />
              </>
            }
            {/*---SIGN BUTTON---*/}
            <button className={btnStyle} onClick={onClickSignButton} >{sign}</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;