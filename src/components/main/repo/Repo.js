import React from 'react';
import './repo.scss'

const Repo = (props) => {
  const repo = props.repo
  console.log(repo)
  
  return (
    <div className='repo'>
      <div className="repo__header">
        <div className="repo__header-title">{repo.name}</div>
      </div>
      <div className="repo__body">
        <div className="repo__body-stars">{repo.stargazers_count}</div>
        <div className="repo__body-update">Последний коммит: {repo.updated_at}</div>
        <div className="repo__body-url">
          <a href={repo.html_url}>Репозиторий</a>
        </div>
      </div>
    </div>
  );
};

export default Repo;