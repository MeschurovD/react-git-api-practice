import React, { useEffect, useState } from 'react';
import { useTypeDispatch } from '../../hooks/redux';
import { setCurrentPage } from '../../reducers/reposSlice';
import { setCheck, setSearch } from '../../reducers/searchSlice';
//@ts-ignore
import styles from './mainHeader.module.scss'

interface PropsType {
  goBack?: Function
}

const MainSearch: React.FC<PropsType> = (props) => {


  //<--------------------DATA AND STATES----------------->
  const checkGoBack = props.goBack ? true : false
  const [isScroll, setIsScroll] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useTypeDispatch()



  console.log(props)
  //<--------------------SUBSIDIARY FUNCTION------------->
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
    if (checkGoBack) props.goBack()
    //setCheck(false)
    //getRepos(searchValue, currentPage, perPage)(dispatch)
  }

  const changeScroll = () => {
    if (window.scrollY >= 40) { setIsScroll(true) }
    else { setIsScroll(false) }

  }

  const onClickGoBack = () => {
    props.goBack()
  }

  const iconStyle = `bx bx-search ${styles.icon}`
  const btnSearchStyle = `btn_color_1 ${styles.search_button}`
  const headerStyle = `${styles.header} ${isScroll && styles.scroll}`
  const buttonGoBackStyle = `btn_color_2 ${styles.button_go_back}`
  //const searchStyle = `${isScroll ? styles.search_base : styles.search_scroll}`


  //<--------------------USE EFFECT---------------------->
  useEffect(() => {
    window.addEventListener('scroll', changeScroll)
  }, [])


  //<--------------------JSX COMPONENT------------------->
  return (
    <header className={headerStyle}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <nav className={styles.nav}>
            {
              checkGoBack &&
              <div className={buttonGoBackStyle} onClick={onClickGoBack}>
                <i className='bx bx-arrow-back'></i>
              </div>
            }
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