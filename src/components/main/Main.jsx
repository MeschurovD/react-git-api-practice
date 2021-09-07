import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getRepos } from '../actions/repos';
import './main.scss'
import Repo from './repo/Repo';

const Main = () => {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)
  const isFetching = useSelector(state => state.repos.isFetching)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    getRepos()(dispatch)
  }, [])
  /**
   * Изменение значения input
   */
  const changeInputValue = e => {
    setSearchValue(e.target.value)
  }

  const searchRepo = () => {
    getRepos(searchValue)(dispatch)
    setSearchValue('')
  }

  console.log(repos)
  return (
    <div>
      <div className='search'>
        <input value={searchValue} onChange={changeInputValue} type='text' placeholder='Input repositories name' className="search__input" />
        <button className="search__button" onClick={searchRepo}>Search</button>
      </div>
      {
        isFetching
          ?
          <div className='fetching'></div>
          :
          repos.map(repo => {
            return <Repo repo={repo} key={repo.id + repo.node_id} />
          })
      }
    </div>
  );
};

export default Main;