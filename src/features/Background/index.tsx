import React from 'react';
//@ts-ignore
import styles from './background.module.scss'

const Background = () => {

  
  return (
    <div className={styles.background}>
      <div className={styles.test_1}></div>
      <div className={styles.test_2}></div>
    </div>
  );
};

export default Background;

//test
// const Background = () => {

//   const bgColor = []
//   for(let i=1; i<21; i++) {
//     const style = ``
//     bgColor.push(<div className={styles[`bg_color_${i}`]} />)
//   }
//   return (
//     <div className={styles.background}>
//       {/* {bgColor} */}
//       <div className={styles.test_1}></div>
//       <div className={styles.test_2}></div>
//       <div className={styles.test_3}></div>
//       <div className={styles.test_4}></div>
//       <div className={styles.test_5}></div>
//       <div className={styles.test_6}></div>

//     </div>
//   );
// };