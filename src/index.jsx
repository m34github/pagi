import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Home } from './containers';
import Header from './components/Header.jsx';
import Reader from './components/Reader.jsx';
import store from './commons/store';
import { common } from './commons/style';

ReactDOM.render(
  <Provider store={store}>
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
    </Router>
  </Provider>,
  document.querySelector('#root')
);
