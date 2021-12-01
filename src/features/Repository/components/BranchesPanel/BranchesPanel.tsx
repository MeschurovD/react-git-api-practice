import React from 'react';
import { useGetBranchQuery } from '../../../../reducers/actions/reposApi';

interface PropsType {
  username: string
  reponame: string
}

const BranchesPanel: React.FC<PropsType> = ({username, reponame}) => {

  const {data, isFetching} = useGetBranchQuery({username, reponame})
  console.log(data)
  return (
    <div>
      
    </div>
  );
};

export default BranchesPanel;