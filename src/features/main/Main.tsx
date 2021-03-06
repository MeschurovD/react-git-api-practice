
//<--------------------IMPORT-------------------------->
import React from 'react';
import CardRepo from './components/CardRepo/CardRepo';
import Pagination from '../../components/Pagination';
import { useTypeDispatch, useTypeSelector } from '../../hooks/redux';
import { setCurrentPage } from '../../reducers/reposSlice';
import { useGetReposQuery } from '../../reducers/actions/reposApi';
import styles from './main.module.scss'
import MainHeader from '../MainHeader/MainHeader';
import Background from '../../components/Background/Background';
import Fetching from './components/Fetching/Fetching';
import IsAuth from '../../components/IsAuth/IsAuth';


/**
 * Основная страница со списком репозиториев
 */
//<--------------------COMPONENT----------------------->
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

//<--------------------JSX COMPONENT------------------->
  return (
    <IsAuth>
      <main className={styles.main_wrapper}>
        <Background />
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
    </IsAuth>
  );

};

export default Main;