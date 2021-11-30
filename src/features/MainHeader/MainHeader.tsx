import React, { useEffect, useState } from 'react';
import { useTypeDispatch } from '../../hooks/redux';
import { removeUser } from '../../reducers/authSlice';
import { setCurrentPage } from '../../reducers/reposSlice';
import { setCheck, setSearch } from '../../reducers/searchSlice';
import Search from './components/Search/Search';
//@ts-ignore
import styles from './mainHeader.module.scss'


//<--------------------TYPE---------------------------->
interface PropsType {
  goBack?: Function
}


//<--------------------COMPONENT----------------------->
const MainSearch: React.FC<PropsType> = (props) => {

  const dispatch = useTypeDispatch()


  //<--------------------DATA AND STATES----------------->
  const checkGoBack = props.goBack ? true : false
  const [isScroll, setIsScroll] = useState<boolean>(false)

  const headerStyle = `${styles.header} ${isScroll && styles.scroll}`
  const buttonGoBackStyle = `${styles.button_go_back}`


  //<--------------------SUBSIDIARY FUNCTION------------->
  const changeScroll = () => {
    if (window.scrollY >= 40) { setIsScroll(true) }
    else { setIsScroll(false) }

  }

  const onClickMain = () => {
    dispatch(setCurrentPage({ page: 1 }))
    dispatch(setSearch(''))
    dispatch(setCheck(false))
  }

  const onClickGoBack = () => {
    props.goBack()
  }

  const onClickLogOut = () => {
    dispatch(removeUser())
  }


  //<--------------------USE EFFECT---------------------->
  useEffect(() => {
    window.addEventListener('scroll', changeScroll)
    return window.addEventListener('scroll', changeScroll)
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
            {
              !checkGoBack &&
              <div className={styles.main_button} onClick={onClickMain} >
                <i className='bx bxl-github' ></i>
              </div>
            }
          </nav>


        </div>
        <div className={styles.right}>
          <Search goBack={props.goBack} />
          <div className={styles.login_button} onClick={onClickLogOut} >
            <i className='bx bx-log-out-circle'></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainSearch;