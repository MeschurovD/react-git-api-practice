
//<--------------------IMPORT-------------------------->
import React from 'react';
import usePages from '../../hooks/usePages';

import './pagination.scss'


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
    <div className="pages">
        {
          pages.map((page, index) =>
            <span
              key={index}
              className={page === currentPage ? 'current-page' : 'page'}
              onClick={() => changeCurrentPage(page)}
            >
              {page}
            </span>)
        }
      </div>
  );
};

export default Pagination;