import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/corporations' component={Home} />
        <Route exact path='/startups' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
