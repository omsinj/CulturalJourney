// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DoorSelection from './components/DoorSelection';
import VideoNarrative from './components/VideoNarrative';
import TriviaGame from './components/TriviaGame';
import Resources from './components/Resources';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/door-selection" component={DoorSelection} />
          <Route path="/video/:field" component={VideoNarrative} />
          <Route path="/game/:field" component={TriviaGame} />
          <Route path="/resources" component={Resources} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
