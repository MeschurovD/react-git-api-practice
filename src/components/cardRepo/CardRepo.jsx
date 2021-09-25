import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getCurrentRepo } from '../actions/repos';

const CardRepo = (props) => {
  const dispatch = useDispatch()
  const { username, reponame } = useParams()
  const [repo, setRepo] = useState({})
  const { isFetching } = useSelector(state => state.repos)

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo, dispatch)
  }, [])
  console.log(repo)

  return (
    <>
      {
        isFetching
          ?
          <div className='fetching'></div>
          :
          <div>
            <button onClick={props.history.goBack} >back</button>
            card 1
          </div>
      }
    </>
  );
};

export default CardRepo;