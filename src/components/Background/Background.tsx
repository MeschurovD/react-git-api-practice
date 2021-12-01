
//<--------------------IMPORT-------------------------->
import React from 'react';
import styles from './background.module.scss'


//<--------------------COMPONENT----------------------->
const Background = () => {

  
//<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.background}>
      <div className={styles.bg_1} />
      <div className={styles.bg_2} />
      <div className={styles.bg_3} />
      <div className={styles.bg_4} />
      <div className={styles.bg_5} />
      <div className={styles.bg_6} />
    </div>
  );
};

export default Background;

