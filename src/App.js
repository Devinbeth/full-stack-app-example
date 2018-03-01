import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Private from './components/Private/Private.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={ Login }/>
            <Route path='/private' component={ Private }/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
