import React from 'react';
// import { Route } from 'react-router-dom';
import './sign-in-&-sign-up.styles.scss';

class SignInOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImgUrl: 'https://i.ibb.co/pzscd59/showcase.jpg',
    };
  }

  render() {
    return (
      <div className="homepage">
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
