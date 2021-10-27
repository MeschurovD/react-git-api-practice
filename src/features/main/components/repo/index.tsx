
//<--------------------IMPORT-------------------------->
import React from 'react';
// @ts-ignore
import { NavLink } from 'react-router-dom';
//import './repo.scss'
//@ts-ignore
import styles from './repo.module.scss'


//<--------------------TYPE---------------------------->
interface PropsType {
  repo: {
    name: string
    stargazers_count: number
    html_url: string
    updated_at: string
    owner: {
      login: string
    }
  }
}


//<--------------------COMPONENT----------------------->
const Repo: React.FC<PropsType> = (props) => {


//<--------------------DATA AND STATES----------------->
  const repo = props.repo
 
  
//<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.repo}>
      <div className="repo__header">
        <div className="repo__header-title"><NavLink to={`/card/${repo.owner.login}/${repo.name}`} >{repo.name}</NavLink></div>
        <div className="repo__header-stars">
          <i className='bx bxs-star'></i>
          <div className="repo__header-star-count">{repo.stargazers_count}</div>
        </div>
      </div>
      <div>aaa</div>
      <div className="repo__body">
        
        <div className="repo__body-update">Последний коммит: {repo.updated_at}</div>
        {/* <a className="repo__body-url" href={repo.html_url}>
          <div>Репозиторий</div>
        </a> */}
      </div>
    </div>
  );
};

export default Repo;