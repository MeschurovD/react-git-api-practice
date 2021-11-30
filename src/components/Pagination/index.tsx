
//<--------------------IMPORT-------------------------->
import React from 'react'
import usePages from '../../hooks/usePages'
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

  const leftStyle = `${styles.arrow} bx bxs-left-arrow-alt`
  const rightStyle = `${styles.arrow} bx bxs-right-arrow-alt`

  const onClickLeft = () => {
    if (currentPage !== 1) {
      changeCurrentPage(currentPage - 1)
    }
  }

  const onClickRight = () => {
    if (currentPage !== totalCount) {
      changeCurrentPage(currentPage + 1)
    }
  }

//<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.pages}>
      <i className={leftStyle} onClick={onClickLeft}></i>
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
         <i className={rightStyle} onClick={onClickRight}></i>
      </div>
  );
};

export default Pagination;