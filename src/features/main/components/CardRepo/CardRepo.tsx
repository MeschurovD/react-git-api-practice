
//<--------------------IMPORT-------------------------->
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypeDispatch } from '../../../../hooks/redux';
import { CurrentRepoType } from '../../../../reducers/reducersType/reposReducersType';
import { setCurrentRepo } from '../../../../reducers/reposSlice';
import styles from './cardRepo.module.scss'


//<--------------------TYPE---------------------------->
interface PropsType {
  repo: CurrentRepoType
}


//<--------------------COMPONENT----------------------->
const CardRepo: React.FC<PropsType> = (props) => {


  //<--------------------DATA AND STATES----------------->
  const dispatch = useTypeDispatch()
  const repo = props.repo
  console.log(repo)

  const toLink = (event: any) => {
    event.stopPropagation()
  }

  const onClickRepo = () => {
    dispatch(setCurrentRepo({currentRepo: props.repo}))
  }

  //<--------------------JSX COMPONENT------------------->
  return (

    <div className={styles.card_repo} >
      <NavLink 
      to={`/card/${repo.owner.login}/${repo.name}`} 
      className={styles.wrapper}
      onClick={onClickRepo}
      >
        {/* --AVATAR-- */}
        <div className={styles.avatar_block}>
          <img src={repo.owner.avatar_url} alt="" className={styles.avatar} />
        </div>
        {/* --BODY INFO-- */}

        <div className={styles.info}>
          <div className={styles.info_count}>
            <i className='bx bxs-star'></i>
            <div className={styles.count}>{repo.stargazers_count}</div>
          </div>
          <div className={styles.info_count}>
            <i className='bx bxs-show'></i>
            <div className="repo__header-star-count">{repo.watchers_count}</div>
          </div>
          <div className={styles.info_count}>
            <i className='bx bx-git-repo-forked'></i>
            <div className="repo__header-star-count">{repo.forks_count}</div>
          </div>



        </div>

        <div className={styles.body}>
          <div className={styles.header}>
            <div className={styles.repo_name}>{repo.name}</div>
            {/* --GITHUB URL BUTTON-- */}

          </div>
        </div>

        <div className={styles.repo_url} >
          <a href={repo.html_url} target='_blank' onClick={toLink}>
            <div className={styles.repo_url_button}>
              Github
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
        </div>





      </NavLink>

      {/* --BACKGROUND-- */}
      <div className={styles.background}>
        <div className={styles.bg_effect_1}></div>
        <div className={styles.bg_effect_2}></div>
      </div>
      <div className={styles.effect} />
    </div>
  );
};

export default CardRepo;