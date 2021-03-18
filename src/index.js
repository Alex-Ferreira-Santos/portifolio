import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Simpledex } from './pages/Simpledex';
import {ArtesDeLineh} from './pages/ArtesDeLineh'
import {Proffy} from './pages/Proffy'
import {Happy} from './pages/Happy'
import {SmartStyle} from './pages/SmartStyle'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App}/>
      <Route path='/simpledex' component={Simpledex}/>
      <Route path='/artesDeLineh' component={ArtesDeLineh}/>
      <Route path='/proffy' component={Proffy}/>
      <Route path='/happy' component={Happy}/>
      <Route path='/smartStyle' component={SmartStyle}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

