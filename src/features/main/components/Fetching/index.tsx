
//<--------------------IMPORT-------------------------->
import React from 'react';
//@ts-ignore
import styles from './fetching.module.scss'


//<--------------------COMPONENT----------------------->
const Fetching: React.FC = () => {


//<--------------------DATA AND STATES----------------->
  const fetchingItems = []
  for(let i=0; i<10; i++) {
    const style = styles[`fetching_item_${i}`]
    fetchingItems.push(<div key={i} className={style} />)
  }


//<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.fetching}>
      {
        fetchingItems
      }
    </div>
  );
};

export default Fetching;