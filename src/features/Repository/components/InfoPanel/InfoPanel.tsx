import React from 'react';
import { useTypeSelector } from '../../../../hooks/redux';
import { ReposType } from '../../../../types/types';
import styles from './infoPanel.module.scss'


const InfoPanel: React.FC = () => {

  const repo = useTypeSelector(state => state.repos.currentRepo)
  console.log(repo)
  return (repo ?
    <div className={styles.info}>
      <div>
        {repo.owner.login}
      </div>
    </div>
    :
    <div></div>
  );
};

export default InfoPanel;