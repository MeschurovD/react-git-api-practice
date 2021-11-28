
//<--------------------IMPORT-------------------------->
import React from 'react';
// @ts-ignore
import { NavLink } from 'react-router-dom';
//import './repo.scss'
//@ts-ignore
import styles from './cardRepo.module.scss'


//<--------------------TYPE---------------------------->
interface PropsType {
  repo: {
    name: string
    stargazers_count: number
    forks_count: number
    html_url: string
    updated_at: string
    owner: {
      login: string
      avatar_url: string
    }
  }
}


//<--------------------COMPONENT----------------------->
const CardRepo: React.FC<PropsType> = (props) => {


  //<--------------------DATA AND STATES----------------->
  const repo = props.repo
  console.log(repo)

  const toLink = (event: any) => {
    event.stopPropagation()
  }

  //<--------------------JSX COMPONENT------------------->
  return (

    <div className={styles.card_repo} >
      {/* <NavLink to={`/card/${repo.owner.login}/${repo.name}`} > */}
        <NavLink to={`/card/${repo.owner.login}/${repo.name}`} className={styles.wrapper}>
          <div className={styles.avatar_block}>
            <img src={repo.owner.avatar_url} alt="" className={styles.avatar} />
          </div>
          <div className={styles.body}>
            <div className="repo__header">
              <div className="repo__header-title">{repo.name}</div>
              <div className="repo__header-stars">
                <i className='bx bxs-star'></i>
                <div className="repo__header-star-count">{repo.stargazers_count}</div>
                <div className="repo__header-star-count">{repo.forks_count}</div>
              </div>
            </div>
            <div>aaa</div>
            <div className="repo__body">

              <div className="repo__body-update">Последний коммит: {repo.updated_at}</div>

            </div>

          </div>
          <div className={styles.repo_url} >
            <a  href={repo.html_url} target='_blank' onClick={toLink}>
              <div className={styles.repo_url_button}>Github</div>
            </a>
          </div>

        </NavLink>

      {/* </NavLink> */}
      <div className={styles.background}>
        <div className={styles.bg_effect_1}></div>
        <div className={styles.bg_effect_2}></div>
      </div>
      <div className={styles.effect} />
    </div>
  );
};

export default CardRepo;