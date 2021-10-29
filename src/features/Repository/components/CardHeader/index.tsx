
//<--------------------IMPORT-------------------------->
import React from 'react';
//@ts-ignore
import styles from './cardHeader.module.scss'


interface PropsType {
  isFetching: boolean
}

//<--------------------COMPONENT----------------------->
const CardHeader: React.FC<PropsType> = ({isFetching}) => {

  const headerMenuStyle = isFetching ? styles.headerMenu_fetching : styles.headerMenu


  //<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.header}>
      <div className={styles.headerImg} />
      <div className={styles.headerMenu}>
        <div className={styles.test}></div>
        aaa
        aaa
        aaa
      </div>
    </div>
  );
};

export default CardHeader;