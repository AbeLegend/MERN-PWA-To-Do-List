import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import Todo from './pages/Todo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
