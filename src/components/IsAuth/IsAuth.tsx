
//<--------------------IMPORT-------------------------->
import React from 'react';
import { Redirect } from 'react-router-dom'
import { useTypeSelector } from '../../hooks/redux';


//<--------------------COMPONENT----------------------->
const IsAuth: React.FC = ({ children }) => {


//<--------------------DATA AND STATES----------------->
  const isAuth = useTypeSelector(state => state.auth.isAuth)


//<--------------------JSX COMPONENT------------------->
  return isAuth ? (
    <>
      {children}
    </>
  ) : (
    <Redirect to='/register' />
  )
};

export default IsAuth;