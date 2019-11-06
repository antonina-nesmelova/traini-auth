import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import FrontPage from './SystemGateway/FrontPage'
import Login from './SystemGateway/Authentication/Login'
import SignUp from './SystemGateway/Authentication/SignUp';
import OperatorAccount from './OperatorAccount';

import '../styles/App.css';

class App extends Component {
  render() {
      return (
        <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/operator/account/dashboard" component={OperatorAccount} />
            <Route exact path="/operator/account/cosmonauts" component={OperatorAccount} />
            <Route exact path="/operator/account/rockets" component={OperatorAccount} />
            <Route exact path="/operator/account/flights" component={OperatorAccount} />
        </Switch>
    )
  }
}

export default App;
