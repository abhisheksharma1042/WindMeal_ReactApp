import HomePage from './pages/homepage/homepage.component';
import SignInOut from './pages/sign-in-&-sign-up/sign-in-&-sign-up.component';
import Shop from './pages/shop/shop.component.jsx';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.scss';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <HomePage default={true} />} />
          <Route exact path="/login" component={SignInOut} />
          <Route exact path="/browse" component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
