
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
import RegisterHeader from './components/RegisterHeader';
import RegisterPanel from './components/RegisterPanel';

import './registration.scss'


//<--------------------COMPONENT----------------------->
const Registration: React.FC = () => {

  const [reg, setReg] = useState(true)
  const [check, setCheck] = useState(false)
  
  const imgPanel1 = check 
    ? reg ? 'img-panel-fon-1 to-right-open' : 'img-panel-fon-1 to-right-close'
    : 'img-panel-fon-1'
  const imgPanel2 = check
    ? reg ? 'img-panel-fon-2 to-left-close' : 'img-panel-fon-2 to-left-open'
    : 'img-panel-fon-2'
  const row = check 
    ? reg ? 'row row-anim' : 'row-rev row-rev-anim'
    : 'row'


  
  //<--------------------JSX COMPONENT------------------->
  return (
    <div className='register'>
      <div className="container">
        <div className="wrapper">
          <RegisterHeader reg={reg} setReg={setReg} setCheck={setCheck} />
          <div className={row}>
            <RegisterPanel reg={reg} />
            <div className='col'></div>
          </div>
        </div>
      </div>
      
      <div className='img-panel' >
        <div className={imgPanel1} ></div>
        <div className={imgPanel2} ></div>
      </div>

    </div>
  );
};

export default Registration;