import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main';
import './app.scss'

const App = () => {


  return (
    <BrowserRouter>
      <div className="container">
        <Route path='/' component={Main} />
      </div>
    </BrowserRouter>
  );
};

export default App;