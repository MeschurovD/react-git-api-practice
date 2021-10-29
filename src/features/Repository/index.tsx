
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { useParams } from 'react-router';
import { useTypeDispatch, useTypeSelector } from '../../hooks/redux';
import { useGetCurrentRepoQuery } from '../../reducers/actions/reposApi';
import { ReposType } from '../../types/types';
import Background from '../Background';
import MainHeader from '../MainHeader';
//@ts-ignore
import styles from './repository.module.scss'
import CardHeader from './components/CardHeader';


//<--------------------TYPE---------------------------->
interface PropsType {
  repos: ReposType
  history: {
    goBack: React.MouseEventHandler<HTMLElement>
  }
}


//<--------------------COMPONENT----------------------->
const Repository: React.FC<PropsType> = (props) => {


  //<--------------------SUBSIDIARY---------------------->
  const dispatch = useTypeDispatch


  //<--------------------DATA AND STATES----------------->
  const { username, reponame } = useParams()
  //const [repo, setRepo] = useState({})
  //const { isFetching } = useTypeSelector(state => state.repos)
  const { data, isFetching } = useGetCurrentRepoQuery({ username, reponame })



  //<--------------------JSX COMPONENT------------------->
  return (
    <div className={styles.b}>
      <Background />
      <div className={styles.container}>
        <MainHeader goBack={props.history.goBack} />
        {
          isFetching
            ?
            <div className='fetching'></div>
            :
            <div>
              <CardHeader isFetching={isFetching} />
            </div>
        }
      </div>

    </div>
  );
};

export default Repository;