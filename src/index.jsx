import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './components/Home.jsx';
import Sandbox from './components/Sandbox.jsx';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sandbox" component={Sandbox} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.querySelector('#root')
);
