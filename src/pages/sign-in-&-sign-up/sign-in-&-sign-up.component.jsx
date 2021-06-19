import React from 'react';
// import { Route } from 'react-router-dom';
import { NavBar } from '../../components/nav-bar/navbar.component';
import './sign-in-&-sign-up.styles.scss';

class SignInOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: 'Login', icon: ['fas', 'sign-in-alt'], href: '/login', id: 1 },

        { name: 'Browse', icon: ['fas', 'list-ul'], href: '/browse', id: 3 },
      ],
      dropFlag: false,
      dropdowns: [{}],
      backgroundImgUrl: 'https://i.ibb.co/pzscd59/showcase.jpg',
    };
  }

  render() {
    return (
      <div className="homepage">
        <div style={{ position: 'relative' }}>
          <NavBar
            links={this.state.links}
            dropdowns={this.state.dropdowns}
            dropFlag={this.state.dropFlag}
          />
        </div>

        <div className="background-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${this.state.backgroundImgUrl})`,
            }}
          >
            <div className="dark-overlay"></div>
          </div>
          <div className="content">
            <h1>Login Or SignUp</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInOut;
