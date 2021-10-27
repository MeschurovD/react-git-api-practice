import React, { useEffect, useState } from 'react';
import { useTypeDispatch } from '../../../../hooks/redux';
import { setCurrentPage } from '../../../../reducers/reposSlice';
//@ts-ignore
import styles from './mainHeader.module.scss'

interface PropsType {
  setCheck: Function
  searchValue: string
  setSearchValue: Function
}

const MainSearch: React.FC<PropsType> = ({ setCheck, searchValue, setSearchValue }) => {

  const [isScroll, setIsScroll] = useState<boolean>(false)

  const dispatch = useTypeDispatch()




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
    dispatch(setCurrentPage({ page: 1 }))
    setCheck(false)
    //getRepos(searchValue, currentPage, perPage)(dispatch)
  }

  const changeScroll = () => {
    if (window.scrollY >= 40) { setIsScroll(true) }
    else { setIsScroll(false) }

  }

  const iconStyle = `bx bx-search ${styles.icon}`
  const btnSearchStyle = `btn_color_1 ${styles.search_button}`
  const headerStyle = `${styles.header} ${isScroll && styles.scroll}`
  //const searchStyle = `${isScroll ? styles.search_base : styles.search_scroll}`

  useEffect(() => {
    window.addEventListener('scroll', changeScroll)
  }, [])

  return (
    <header className={headerStyle}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <nav className={styles.nav}>
            meny
          </nav>


        </div>
        <div className={styles.right}>
          <div className={styles.search_base}>
            <i className={iconStyle}></i>
            <input
              value={searchValue}
              onChange={changeInputValue}
              type='text'
              placeholder='Введите название репозитория'
              className={styles.search_input}
            />
            <button className={btnSearchStyle} onClick={searchRepo}>Search</button>
          </div>
          <div>login</div>
        </div>
      </div>
    </header>
  );
};

export default MainSearch;