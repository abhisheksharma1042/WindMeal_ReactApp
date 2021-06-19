import React from 'react';
import logo from '../../logo.svg';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.styles.scss';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faTractor,
  faUserPlus,
  faSignInAlt,
  faListUl,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faTractor,
  faUserPlus,
  faSignInAlt,
  faListUl,
  faUser
  // more icons go here
);

export const NavBar = withRouter((props) => {
  const { history, dropdowns, links, dropFlag } = props;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src={logo} className="App-logo" alt="logo" />
        {'  '}
        WindMeal
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end" style={{ width: '100%' }}>
          {dropFlag
            ? dropdowns.map((dropdown) => {
                return (
                  <NavDropdown
                    key={dropdown.id}
                    title={
                      <div style={{ display: 'inline-block' }}>
                        <FontAwesomeIcon
                          icon={dropdown.icon}
                          style={{ marginLeft: '5px' }}
                        ></FontAwesomeIcon>{' '}
                        {dropdown.name}{' '}
                      </div>
                    }
                    id="collasible-nav-dropdown"
                  >
                    {dropdown.links.map((link) => {
                      return (
                        <NavDropdown.Item
                          key={link.id}
                          onClick={() => history.push(link.href)}
                        >
                          {link.icon ? (
                            <FontAwesomeIcon
                              icon={link.icon}
                              style={{ marginLeft: '5px' }}
                            />
                          ) : null}
                          {link.name}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                );
              })
            : null}

          {
            //Nav Links
            links.map((link) => {
              return (
                <Nav.Link key={link.id} onClick={() => history.push(link.href)}>
                  <FontAwesomeIcon
                    icon={link.icon}
                    style={{ marginLeft: '5px' }}
                  />{' '}
                  {link.name}
                </Nav.Link>
              );
            })
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});
