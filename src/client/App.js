import React, { Component } from 'react';
import Movies from './pages/Movies';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Popular Movies</h1>
        <Movies />
      </div>
    );
  }
}
