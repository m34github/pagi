import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Reader from './components/Reader.jsx';
import { common } from './commons/style';

ReactDOM.render(
  <Router>
    <article>
      <Header />
      <main style={common.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reader" component={Reader} />
          <Redirect to="/" />
        </Switch>
      </main>
    </article>
  </Router>,
  document.querySelector('#root')
);
