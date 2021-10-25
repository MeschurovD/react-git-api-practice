
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { useParams } from 'react-router';
import { useTypeDispatch, useTypeSelector } from '../../hooks/redux';
import { useGetCurrentRepoQuery } from '../../reducers/actions/reposApi';
import { ReposType } from '../../types/types';


//<--------------------TYPE---------------------------->
interface PropsType {
  repos: ReposType
  history: {
    goBack: React.MouseEventHandler<HTMLElement>
  }
}


//<--------------------COMPONENT----------------------->
const CardRepo: React.FC<PropsType> = (props) => {


//<--------------------SUBSIDIARY---------------------->
  const dispatch = useTypeDispatch


//<--------------------DATA AND STATES----------------->
  const { username, reponame } = useParams()
  //const [repo, setRepo] = useState({})
  //const { isFetching } = useTypeSelector(state => state.repos)
  const { data, isFetching } = useGetCurrentRepoQuery({username, reponame})



//<--------------------JSX COMPONENT------------------->
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