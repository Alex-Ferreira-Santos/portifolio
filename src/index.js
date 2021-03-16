import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Simpledex } from './pages/Simpledex';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App}/>
      <Route path='/simpledex' exact={true} component={Simpledex}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

