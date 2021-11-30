
//<--------------------IMPORT-------------------------->
import React from 'react';
import styles from './cardHeader.module.scss'
import { useParams } from 'react-router-dom'
import { useTypeSelector } from '../../../../hooks/redux';


interface PropsType {
  isFetching: boolean
}

//<--------------------COMPONENT----------------------->
const CardHeader: React.FC<PropsType> = ({ isFetching }) => {

  const { username, reponame } = useParams()
  const repo = useTypeSelector(state => state.repos.currentRepo)
  console.log(repo)

  const headerMenuStyle = isFetching ? styles.headerMenu_fetching : styles.headerMenu


  //<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.header}>
      <div className={styles.headerImg} >
        <div className={styles.backgroung} />
      </div>
      <div className={styles.headerMenu}>
        <div className={styles.avatar}>
          <img src={repo.owner.avatar_url} alt="" />
        </div>
        <div className={styles.name}>
          {reponame}
        </div>
        <div className={styles.repo_url} >
          <a href={repo.html_url} target='_blank' >
            <div className={styles.repo_url_button}>
              Github
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;