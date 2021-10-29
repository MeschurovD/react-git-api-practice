import React from 'react';
//@ts-ignore
import styles from './fetching.module.scss'

const Fetching: React.FC = () => {
  console.log(styles)

  const fetchingItems = []
  for(let i=0; i<10; i++) {
    const style = styles[`fetching_item_${i}`]
    fetchingItems.push(<div key={i} className={style} />)
  }
  return (
    <div className={styles.fetching}>
      {
        fetchingItems
      }
    </div>
  );
};

export default Fetching;