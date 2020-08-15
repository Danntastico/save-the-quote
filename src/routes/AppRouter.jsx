import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomeScreen } from '../containers/home/HomeScreen';
import { LoginScreen } from '../containers/auth/LoginScreen';
import { RegisterScreen } from '../containers/auth/RegisterScreen';
import { firebase } from '../firebase/firebase-config';

export const AppRouter = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    }); //creates an observable,
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
        </Switch>
      </div>
    </Router>
  );
};
