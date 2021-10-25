
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
import Repo from './repo/Repo';
import Pagination from '../../components/Pagination';
//@ts-ignore
import { useTypeDispatch, useTypeSelector } from '../../hooks/redux';
import { setCurrentPage } from '../../reducers/reposSlice';
import { useGetReposQuery } from '../../reducers/actions/reposApi';
//@ts-ignore
import styles from './main.module.scss'


//<--------------------COMPONENT----------------------->
/**
 * Основная страница со списком репозиториев
 */
const Main: React.FC = () => {


//<--------------------SUBSIDIARY---------------------->
  const dispatch = useTypeDispatch()
  
  
  //<--------------------DATA AND STATES----------------->
  const { currentPage, totalCount } = useTypeSelector(state => state.repos)
  const [searchValue, setSearchValue] = useState('')
  const [check, setCheck] = useState(false)
  const perPage: number = 10

  const { data, isFetching } = useGetReposQuery({searchQuery: searchValue, currentPage, perPage}, {skip: check})

  
//<--------------------SUBSIDIARY FUNCTION------------->
  /**
   * Изменение значения input - поисковой строки
   */
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(true)
    setSearchValue(e.target.value)
  }

  /**
   * Поиск репозиториев 
   */
  const searchRepo = () => {
    dispatch(setCurrentPage({page: 1}))
    setCheck(false)
    //getRepos(searchValue, currentPage, perPage)(dispatch)
  }

  /**
   * Изменение страницы с репозиториями
   * @param {*} page - номер страницы
   */
  const changeCurrentPage = (page: number) => {
    dispatch(setCurrentPage({page}))
  }


//<--------------------JSX COMPONENT------------------->
  return (
    <div>
      <div className=''>
        <input value={searchValue} onChange={changeInputValue} type='text' placeholder='Введите название репозитория' className="" />
        <button className="" onClick={searchRepo}>Search</button>
      </div>
      {
        isFetching
          ?
          <div className=''>Загрузка</div>
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