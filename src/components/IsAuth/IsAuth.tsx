import React from 'react';
//@ts-ignore
import { Redirect } from 'react-router-dom'
import { useTypeSelector } from '../../hooks/redux';

const IsAuth: React.FC = ({ children }) => {

  const isAuth = useTypeSelector(state => state.auth.isAuth)
  console.log(isAuth)

  return isAuth ? (
    <>
      {children}
    </>
  ) : (
    <Redirect to='/register' />
  )
};

export default IsAuth;