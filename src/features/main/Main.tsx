
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
//import { setCurrentPage } from '../../reducers/reposReducer';
import './main.scss'
import Repo from './repo/Repo';
import Pagination from '../../components/Pagination';
//@ts-ignore
import { useTypeDispatch, useTypeSelector } from '../../hooks/redux';
import { getRepos } from '../../reducers/actions/reposAction';
import { setCurrentPage } from '../../reducers/reposSlice';
import { useGetReposQuery } from '../../reducers/actions/reposApi';

import Test from './test'


//<--------------------COMPONENT----------------------->
/**
 * Основная страница со списком репозиториев
 */
const Main: React.FC = () => {


//<--------------------SUBSIDIARY---------------------->
  const dispatch = useTypeDispatch()
  
  
  //<--------------------DATA AND STATES----------------->
  //const { reposList } = useTypeSelector(state => state.repos)
  const { currentPage, totalCount } = useTypeSelector(state => state.repos)
  const [searchValue, setSearchValue] = useState('')
  const perPage: number = 10

  const { data, isFetching } = useGetReposQuery({searchQuery: searchValue, currentPage, perPage})

  console.log(data)
  


//<--------------------USE EFFECT---------------------->
  // useEffect(() => {
  //   dispatch(getRepos({searchQuery: searchValue, currentPage, perPage}))
  //  // getRepos(searchValue, currentPage, perPage)(dispatch)
  // }, [currentPage])


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
    //dispatch(setCurrentPage(1))
    //getRepos(searchValue, currentPage, perPage)(dispatch)
  }

  /**
   * Изменение страницы с репозиториями
   * @param {*} page - номер страницы
   */
  const changeCurrentPage = (page: number) => {
    //dispatch(setCurrentPage(page))
    console.log('123')
    dispatch(setCurrentPage({page}))
  }


//<--------------------JSX COMPONENT------------------->
  return (
    <div>
      <Test />
      <div className='search'>
        <input value={searchValue} onChange={changeInputValue} type='text' placeholder='Введите название репозитория' className="search__input" />
        <button className="search__button" onClick={searchRepo}>Search</button>
      </div>
      {
        isFetching
          ?
          <div className='fetching'></div>
          :
          data.items.map((repo: any) => {
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