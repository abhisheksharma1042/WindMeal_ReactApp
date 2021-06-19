import React from 'react';
// import { Route } from 'react-router-dom';
import { NavBar } from '../../components/nav-bar/navbar.component';
import './shop.styles.scss';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
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
            <h1>Browse Farms</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
