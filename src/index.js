import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Simpledex } from './pages/Simpledex';
import {ArtesDeLineh} from './pages/ArtesDeLineh'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App}/>
      <Route path='/simpledex' component={Simpledex}/>
      <Route path='/artesDeLineh' component={ArtesDeLineh}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

