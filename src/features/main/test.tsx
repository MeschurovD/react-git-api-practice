import React from 'react';
//@ts-ignore
import styles from './test.module.scss'

const Test = () => {
  console.log(styles)
  return (
    <div className={styles.test}>
      asjfjka ajfhasjf asjfjas
    </div>
  );
};

export default Test;