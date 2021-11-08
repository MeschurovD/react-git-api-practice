
//<--------------------IMPORT-------------------------->
import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './features/Main';
import Repository from './features/Repository';
import Registration from './features/Registration';
//@ts-ignore
import './app.scss'
import { useTypeDispatch, useTypeSelector } from './hooks/redux';
import { setUser } from './reducers/authSlice';


//<--------------------COMPONENT----------------------->
const App: React.FC = () => {

  const dispatch = useTypeDispatch()

  const isAuth = useTypeSelector(state => state.auth.isAuth)
  console.log(isAuth)

  useLayoutEffect(() => {
    const user = sessionStorage.getItem('user')
    if (user) {
      const { email, token, id } = JSON.parse(user)
      dispatch(setUser({email, token, id}))
    }
  })
  
//<--------------------JSX COMPONENT------------------->
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/main' >
            {isAuth ? <Main /> : <Redirect to='/register' />}
          </Route>
          <Route path='/register' component={Registration} />
          <Route path='/card/:username/:reponame' component={Repository} />
          <Redirect to="/main" />
        </Switch>
    </BrowserRouter>
  );
};

export default App;