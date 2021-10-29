
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
import CardRepo from './components/CardRepo';
import Pagination from '../../components/Pagination';
//@ts-ignore
import { useTypeDispatch, useTypeSelector } from '../../hooks/redux';
import { setCurrentPage } from '../../reducers/reposSlice';
import { useGetReposQuery } from '../../reducers/actions/reposApi';
//@ts-ignore
import styles from './main.module.scss'
import MainHeader from '../MainHeader';
import Navbar from './components/Navbar';
import Background from '../Background';
import Fetching from './components/Fetching';


//<--------------------COMPONENT----------------------->
/**
 * Основная страница со списком репозиториев
 */
const Main: React.FC = () => {


  //<--------------------SUBSIDIARY---------------------->
  const dispatch = useTypeDispatch()


  //<--------------------DATA AND STATES----------------->
  const { currentPage, totalCount } = useTypeSelector(state => state.repos)
  const { check, searchValue } = useTypeSelector(state => state.search)
  const perPage: number = 10

  const { data, isFetching } = useGetReposQuery({ searchQuery: searchValue, currentPage, perPage }, { skip: check })


  //<--------------------SUBSIDIARY FUNCTION------------->


  /**
   * Изменение страницы с репозиториями
   * @param {*} page - номер страницы
   */
  const changeCurrentPage = (page: number) => {
    dispatch(setCurrentPage({ page }))
    window.scrollTo(0, 0)
  }

  console.log(styles)
  //<--------------------JSX COMPONENT------------------->
  return (
    <main className={styles.main_wrapper}>
      <Background />
      {/* <Navbar /> */}

      <div className={styles.container}>
        <MainHeader />
        <div className={styles.main_body}>
          {
            isFetching
              ?
              <Fetching />
              :
              data.items.map((repo: any) => {
                return <CardRepo repo={repo} key={repo.id + repo.node_id} />
              })
          }

        </div>
        <div>
          {!isFetching &&
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              perPage={perPage}
              changeCurrentPage={changeCurrentPage}
            />}
        </div>
      </div>
    </main>
  );

};

export default Main;