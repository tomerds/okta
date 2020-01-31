
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './components/login-button';

const config = {
  issuer: 'https://dev-811688/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa16o5teu3VycONs4x6',
  pkce: true
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security {...config}>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}

export default App;