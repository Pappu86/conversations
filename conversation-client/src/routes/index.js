import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

import Home from './home';
import Register from './register';
import Login from './login';
import Messages from './messages';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    decode(refreshToken);
  } catch (err) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      ))}
  />
);

export default () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/messages/:userId" exact component={Messages} />      
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />      
    </Switch>
  </BrowserRouter>
);