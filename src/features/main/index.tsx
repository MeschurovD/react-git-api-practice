
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
import Repo from './components/repo';
import Pagination from '../../components/Pagination';
//@ts-ignore
import { useTypeDispatch, useTypeSelector } from '../../hooks/redux';
import { setCurrentPage } from '../../reducers/reposSlice';
import { useGetReposQuery } from '../../reducers/actions/reposApi';
//@ts-ignore
import styles from './main.module.scss'
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';


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

  const { data, isFetching } = useGetReposQuery({ searchQuery: searchValue, currentPage, perPage }, { skip: check })


  //<--------------------SUBSIDIARY FUNCTION------------->


  /**
   * Изменение страницы с репозиториями
   * @param {*} page - номер страницы
   */
  const changeCurrentPage = (page: number) => {
    dispatch(setCurrentPage({ page }))
  }

  console.log(styles)
  //<--------------------JSX COMPONENT------------------->
  return (
    <main className={styles.main_wrapper}>

      {/* <Navbar /> */}

      <div className={styles.container}>
        <MainHeader setCheck={setCheck} searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className={styles.main_body}>
          {
            isFetching
              ?
              <div className={styles.fetching}>Загрузка</div>
              :
              data.items.map((repo: any) => {
                return <Repo repo={repo} key={repo.id + repo.node_id} />
              })
          }
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