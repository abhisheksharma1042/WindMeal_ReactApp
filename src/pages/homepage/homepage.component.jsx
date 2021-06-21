import React from 'react';
import { withRouter } from 'react-router-dom';

import './homepage.styles.scss';

class HomePage extends React.Component {
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
            <h1>Find a farm near you</h1>
            <p>Find, rate and review local farms</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
