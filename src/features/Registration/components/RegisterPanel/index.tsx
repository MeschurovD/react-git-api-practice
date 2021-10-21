import React from 'react';

import './register-panel.scss'

const RegisterPanel = () => {
  return (
    <div className="col">
      <div className='panel__column'>
        <div className="panel__card">
          <div className="panel__card-header text-color-2">Github project - login</div>
          <div className="panel__card-body">
            <div className="panel__card-body-title">Username</div>
            <input className='input-r' placeholder='username' />
            <div className="panel__card-body-title">Password</div>
            <input className='input-r' placeholder='Password' />
            <button className='btn-sign-in btn-color-2 btn-anim-sign'>Sing in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;