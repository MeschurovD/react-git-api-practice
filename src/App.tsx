
//<--------------------IMPORT-------------------------->
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './features/main/Main';
import CardRepo from './features/cardRepo/CardRepo';

import './app.scss'


//<--------------------COMPONENT----------------------->
const App: React.FC = () => {


//<--------------------JSX COMPONENT------------------->
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/card/:username/:reponame' component={CardRepo} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;