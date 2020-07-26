import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomeScreen } from '../containers/home/HomeScreen';
import { LoginScreen } from '../containers/auth/LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/login' component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
};
