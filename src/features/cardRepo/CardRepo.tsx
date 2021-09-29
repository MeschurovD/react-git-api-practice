
//<--------------------IMPORT-------------------------->
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { useParams } from 'react-router';
import { getCurrentRepo } from '../../components/actions/repos';
import { useTypeSelector } from '../../hooks/useTypeSelector';
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
  const dispatch = useDispatch()


//<--------------------DATA AND STATES----------------->
  const { username, reponame } = useParams()
  const [repo, setRepo] = useState({})
  const { isFetching } = useTypeSelector(state => state.repos)


//<--------------------USE EFFECT---------------------->
  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo, dispatch)
  }, [])
  

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