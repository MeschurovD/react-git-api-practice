
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
import RegisterHeader from './components/RegisterHeader';
import RegisterPanel from './components/RegisterPanel';

import './registration.scss'


//<--------------------COMPONENT----------------------->
const Registration = () => {

  const [reg, setReg] = useState(true)
  console.log(reg);
  
  let imgStyle = reg ? 'img-panel to-right-open' : 'img-panel to-right-close'

  // useEffect(() => {
  //   imgStyle = 'img-panel'
  // })

  console.log(imgStyle);
  
  //<--------------------JSX COMPONENT------------------->
  return (
    <div className='register'>
      <div className="container">
        <div className="wrapper">
          <RegisterHeader reg={reg} setReg={setReg} />
          <div className="row">
            <RegisterPanel />
            <div className='col'></div>
          </div>
        </div>
      </div>
      <div className={imgStyle}>
        <div className="img-panel-wrapper"></div>
      </div>

    </div>
  );
};

export default Registration;