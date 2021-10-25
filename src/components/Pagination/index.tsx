
//<--------------------IMPORT-------------------------->
import React from 'react';
import usePages from '../../hooks/usePages';
//@ts-ignore
import styles from './pagination.module.scss'


//<--------------------TYPE---------------------------->
type PropsType = {
  currentPage: number
  totalCount: number
  perPage: number
  changeCurrentPage: Function
}


//<--------------------COMPONENT----------------------->
const Pagination: React.FC<PropsType> = ({currentPage, totalCount, perPage, changeCurrentPage}) => {
  

//<--------------------DATA AND STATES----------------->
  const pages = usePages(currentPage, totalCount, perPage)  


//<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.pages}>
        {
          pages.map((page, index) =>
            <span
              key={index}
              className={page === currentPage ? styles.currentPage : styles.page}
              onClick={() => changeCurrentPage(page)}
            >
              {page}
            </span>)
        }
      </div>
  );
};

export default Pagination;