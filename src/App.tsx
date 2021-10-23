
//<--------------------IMPORT-------------------------->
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './features/main/Main';
import CardRepo from './features/CardRepo';
import Registration from './features/Registration';

import './app.scss'


//<--------------------COMPONENT----------------------->
const App: React.FC = () => {

  const isReg = false

  var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el: any) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
//<--------------------JSX COMPONENT------------------->
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/main' >
            {isReg ? <Main /> : <Redirect to='/register' />}
          </Route>
          <Route path='/register' component={Registration} />
          <Route path='/card/:username/:reponame' component={CardRepo} />
          <Redirect to="/main" />
        </Switch>
    </BrowserRouter>
  );
};

export default App;