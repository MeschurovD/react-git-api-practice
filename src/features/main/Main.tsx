
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../reducers/reposReducer';
import { getRepos } from '../../components/actions/repos';
import './main.scss'
import Repo from './repo/Repo';
import Pagination from '../../components/Pagination';
import { useTypeSelector } from '../../hooks/useTypeSelector';


//<--------------------COMPONENT----------------------->
/**
 * Основная страница со списком репозиториев
 */
const Main: React.FC = () => {


//<--------------------SUBSIDIARY---------------------->
  const dispatch = useDispatch()


//<--------------------DATA AND STATES----------------->
  const { repos } = useTypeSelector(state => state.repos)
  const { isFetching, currentPage, totalCount } = useTypeSelector(state => state.repos)
  const [searchValue, setSearchValue] = useState('')
  const perPage: number = 10


//<--------------------USE EFFECT---------------------->
  useEffect(() => {
    getRepos(searchValue, currentPage, perPage)(dispatch)
  }, [currentPage])


//<--------------------SUBSIDIARY FUNCTION------------->
  /**
   * Изменение значения input - поисковой строки
   */
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  /**
   * Поиск репозиториев 
   */
  const searchRepo = () => {
    dispatch(setCurrentPage(1))
    getRepos(searchValue, currentPage, perPage)(dispatch)
  }

  /**
   * Изменение страницы с репозиториями
   * @param {*} page - номер страницы
   */
  const changeCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page))
  }


//<--------------------JSX COMPONENT------------------->
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
            console.log(repo)
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