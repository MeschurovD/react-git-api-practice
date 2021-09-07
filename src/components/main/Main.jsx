import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getRepos } from '../actions/repos';
import './main.scss'
import Repo from './repo/Repo';

const Main = () => {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)
  
  useEffect(() => {
    const getR = getRepos()
    getR(dispatch)
  }, [])

  console.log(repos)
  return (
    <div>
      <div>Main</div>
      {repos.map(repo => {
        return <Repo repo={repo} key={repo.id+repo.node_id}/>
      })}
    </div>
  );
};

export default Main;