import React from 'react';
import './repo.scss'

const Repo = (props) => {
  const repo = props.repo

  return (
    <div className='repo'>
      <div className="repo__header">
        <div className="repo__header-title">{repo.name}</div>
        <div className="repo__header-stars">
          <i className='bx bxs-star'></i>
          <div className="repo__header-star-count">{repo.stargazers_count}</div>
        </div>
      </div>
      <div className="repo__body">
        

        <div className="repo__body-update">Последний коммит: {repo.updated_at}</div>
        <a className="repo__body-url" href={repo.html_url}>
          <div>Репозиторий</div>
        </a>
      </div>
    </div>
  );
};

export default Repo;