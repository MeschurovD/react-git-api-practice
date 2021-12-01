
//<--------------------IMPORT-------------------------->
import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './features/Main/Main';
import Repository from './features/Repository/Repository';
import Registration from './features/Registration/Registration';
import './app.scss'
import { useTypeDispatch, useTypeSelector } from './hooks/redux';
import { setUser } from './reducers/authSlice';


//<--------------------COMPONENT----------------------->
const App: React.FC = () => {

  const dispatch = useTypeDispatch()

  const isAuth = useTypeSelector(state => state.auth.isAuth)

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