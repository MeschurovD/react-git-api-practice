
//<--------------------IMPORT-------------------------->
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './features/Main';
import Repository from './features/Repository';
import Registration from './features/Registration';
//@ts-ignore
import './app.scss'


//<--------------------COMPONENT----------------------->
const App: React.FC = () => {

  const isReg = true

  
//<--------------------JSX COMPONENT------------------->
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/main' >
            {isReg ? <Main /> : <Redirect to='/register' />}
          </Route>
          <Route path='/register' component={Registration} />
          <Route path='/card/:username/:reponame' component={Repository} />
          <Redirect to="/main" />
        </Switch>
    </BrowserRouter>
  );
};

export default App;