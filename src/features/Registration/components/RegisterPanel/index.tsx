import React from 'react';

import './register-panel.scss'

interface PropsType {
  reg: boolean
  checkFirstDownload: boolean
}

//<--------------------COMPONENT----------------------->
const RegisterPanel: React.FC<PropsType> = ({ reg, checkFirstDownload }) => {

  const btnStyle = checkFirstDownload
    ? reg ? 'btn-sign-in btn-color-2 btn-anim-sign btn-sign-up-anim' : 'btn-sign-in btn-color-1 btn-anim-reg btn-sign-down-anim'
    : 'btn-sign-in btn-color-2 btn-anim-sign'
  const headerStyle = reg ? 'panel__card-header text-color-2' : 'panel__card-header text-color-1'
  const headerTitle = reg ? 'login' : 'registration'
  const inputStyle = reg ? 'input-r left' : 'input-r right'

  const sign = reg ? 'Sing in' : 'Sing up'


  //<--------------------JSX COMPONENT------------------->
  return (
    <div className="col">
      <div className='panel__column'>
        <div className="panel__card">
          <div className={headerStyle} >Github project - {headerTitle}</div>

          <div className="panel__card-body">
            <div className="panel__card-body-title">Email</div>
            <input className={inputStyle} placeholder='Email' />

            <div className="panel__card-body-title">Password</div>
            <input type='password' className={inputStyle} placeholder='Password' />

            {
              !reg &&
              <>
                <div className="panel__card-body-title">Password Check</div>
                <input type='password' className={inputStyle} placeholder='Password check' />
              </>
            }


            <button className={btnStyle} >{sign}</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;