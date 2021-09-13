import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../reducers/reposReducer';
import { getRepos } from '../actions/repos';
import './main.scss'
import Repo from './repo/Repo';
import Pagination from '../Pagination';

const Main = () => {
  const dispatch = useDispatch()
  const { repos, isFetching, currentPage, totalCount } = useSelector(state => state.repos)
  const [searchValue, setSearchValue] = useState('')
  const perPage = 10


  useEffect(() => {
    getRepos(searchValue, currentPage, perPage)(dispatch)
  }, [currentPage])
  /**
   * Изменение значения input - поисковой строки
   */
  const changeInputValue = e => {
    setSearchValue(e.target.value)
  }

  /**
   * Поиск репозиториев 
   */
  const searchRepo = () => {
    dispatch(setCurrentPage(1))
    getRepos(searchValue, currentPage, perPage)(dispatch)
    setSearchValue('')
  }

  /**
   * Изменение страницы с репозиториями
   * @param {*} page - номер страницы
   */
  const changeCurrentPage = page => {
    dispatch(setCurrentPage(page))
  }

  return (
    <div>
      <div className='search'>
        <input value={searchValue} onChange={changeInputValue} type='text' placeholder='Введите название репозитория' className="search__input" />
        <button className="search__button" onClick={searchRepo}>Search</button>
      </div>
      {
        isFetching
          ?
          <div className='fetching'></div>
          :
          repos.map(repo => {
            return <Repo repo={repo} key={repo.id + repo.node_id} />
          })
      }
      <Pagination
        currentPage={currentPage}
        totalCount={totalCount}
        perPage={perPage}
        changeCurrentPage={changeCurrentPage}
      />
    </div>
  );
};

export default Main;