
//<--------------------IMPORT-------------------------->
import React, { useState } from 'react';
import RegisterHeader from './components/RegisterHeader/RegisterHeader';
import RegisterPanel from './components/RegisterPanel/RegisterPanel';
import styles from './registration.module.scss'


//<--------------------COMPONENT----------------------->
const Registration: React.FC = () => {


//<--------------------DATA AND STATES----------------->
  const [reg, setReg] = useState(true)
  const [checkFirstDownload, setCheckFirstDownload] = useState(false)
  
  const imgPanel1 = checkFirstDownload 
    ? reg ? `${styles.imgPanel_fon_1} ${styles.to_right_open}` : `${styles.imgPanel_fon_1} ${styles.to_right_close}`
    : styles.imgPanel_fon_1
  const imgPanel2 = checkFirstDownload
    ? reg ? `${styles.imgPanel_fon_2} ${styles.to_left_close}` : `${styles.imgPanel_fon_2} ${styles.to_left_open}`
    : styles.imgPanel_fon_2
  const row = checkFirstDownload 
    ? reg ? `${styles.row} ${styles.rowAnim}` : `${styles.rowRev} ${styles.rowRevAnim}`
    : styles.row


  //<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <RegisterHeader setReg={setReg} setCheckFirstDownload={setCheckFirstDownload} />
          <div className={row}>
            <RegisterPanel reg={reg} checkFirstDownload={checkFirstDownload} />
            <div className={styles.col}></div>
          </div>
        </div>
      </div>
      <div className={styles.imgPanel} >
        <div className={imgPanel1} ></div>
        <div className={imgPanel2} ></div>
      </div>

    </div>
  );
};

export default Registration;