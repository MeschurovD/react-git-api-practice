import React from 'react';
import usePages from '../../hooks/usePages';

import './pagination.scss'


const Pagination = ({currentPage, totalCount, perPage, changeCurrentPage}) => {
  
  const pages = usePages(currentPage, totalCount, perPage)  

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