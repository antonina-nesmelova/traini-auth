import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import FrontPage from "./FrontPage"
import Login from "./Login"
import SignUp from "./SignUp";
import Account from "./Account";

import '../styles/App.css';
import Header from "./Header";

class App extends Component {
  render() {
      return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={FrontPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/account" component={Account} />
            </Switch>
        </div>
    )
  }
}

export default App;
