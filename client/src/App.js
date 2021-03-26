// lib
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// local
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
// Private Route
import PrivateRoute from './components/PrivateRoute';
import Todo from './pages/Todo';

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/todo" component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
