
//<--------------------IMPORT-------------------------->
import React, { useState } from 'react';
import { useTypeDispatch } from '../../../../hooks/redux';
import { setCurrentPage } from '../../../../reducers/reposSlice';
import { setCheck, setSearch } from '../../../../reducers/searchSlice';
//@ts-ignore
import styles from './search.module.scss'


//<--------------------TYPE---------------------------->
interface PropsType {
  goBack: Function
}


//<--------------------COMPONENT----------------------->
const Search: React.FC<PropsType> = ({goBack}) => {


//<--------------------DATA AND STATES----------------->
  const checkGoBack = goBack ? true : false

  const dispatch = useTypeDispatch()

  const [searchValue, setSearchValue] = useState('')
  
  const iconStyle = `bx bx-search ${styles.icon}`
  const btnSearchStyle = `btn_color_1 ${styles.search_button}`


//<--------------------HANDLERS------------------------>
  /**
   * Изменение значения input - поисковой строки
   */
   const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setCheck(true)
    dispatch(setCheck(true))
    setSearchValue(e.target.value)
  }

  /**
   * Поиск репозиториев 
   */
   const searchRepo = () => {
    dispatch(setCurrentPage({ page: 1 }))
    dispatch(setSearch(searchValue))
    dispatch(setCheck(false))
    if (checkGoBack) goBack()
  }

  const onClickSearchRepo = () => {
    searchRepo()
  }

  const onKeySearchRepo = (event: any) => {
    if (event.key === 'Enter') searchRepo()
  }


//<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.search_base}>
      <i className={iconStyle}></i>
      <input
        value={searchValue}
        onChange={changeInputValue}
        type='text'
        placeholder='Введите название репозитория'
        onKeyDown={onKeySearchRepo}
        className={styles.search_input}
      />
      <button className={btnSearchStyle} onClick={onClickSearchRepo}>Search</button>
    </div>
  );
};

export default Search;