import HomePage from './pages/homepage/homepage.component';
import SignInOut from './pages/sign-in-&-sign-up/sign-in-&-sign-up.component';
import ShopPage from './pages/shop/shop.component.jsx';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { NavBar } from './components/nav-bar/navbar.component';
import './App.scss';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          name: 'Sign-in',
          icon: ['fas', 'sign-in-alt'],
          href: '/login',
          id: 1,
        },
        { name: 'Browse', icon: ['fas', 'list-ul'], href: '/browse', id: 3 },
      ],
      dropdowns: [
        {
          id: 1,
          name: 'Account',
          icon: ['fas', 'user'],
          present: true,
          links: [{ name: 'Sign Out', href: '/', id: 1 }],
        },
      ],
      dropFlag: true,
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar
          links={this.state.links}
          dropdowns={this.state.dropdowns}
          dropFlag={this.state.dropFlag}
        />
        <Switch>
          <Route exact path="/" component={() => <HomePage default={true} />} />
          <Route exact path="/login" component={SignInOut} />
          <Route exact path="/browse" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
