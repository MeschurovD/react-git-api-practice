
//<--------------------IMPORT-------------------------->
import React from 'react';
import styles from './background.module.scss'


//<--------------------COMPONENT----------------------->
const Background = () => {

  
//<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.background}>
      <div className={styles.test_1}></div>
      <div className={styles.test_2}></div>
    </div>
  );
};

export default Background;

