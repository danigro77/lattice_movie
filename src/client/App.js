import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  Movies,
  Movie,
} from './pages';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h1>Popular Movies</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        <section>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route path="/:movieId" component={Movie} />
          </Switch>
        </section>
      </Router>
    );
  }
}
