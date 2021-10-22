import React from 'react';

import './register-panel.scss'

interface PropsType {
  reg: boolean
}

//<--------------------COMPONENT----------------------->
const RegisterPanel: React.FC<PropsType> = ({reg}) => {

  const btnStyle = reg ? 'btn-sign-in btn-color-2 btn-anim-sign' : 'btn-sign-in btn-color-1 btn-anim-reg'
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
            <div className="panel__card-body-title">Username</div>
            <input className={inputStyle} placeholder='username' />

            <div className="panel__card-body-title">Username</div>
            <input className={inputStyle} placeholder='username' />

            <div className="panel__card-body-title">Password</div>
            <input className={inputStyle} placeholder='Password' />

            <button className={btnStyle} >{sign}</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;