import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

import './Main.css';

import Home from './views/home';
import Portfolio from './views/portfolio';
import Creator from './views/creator';

export default class AppMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">RoyalsCollectives</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1}>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem eventKey={2}>
                  <Link to="/portfolio">Portfolio</Link>
                </NavItem>
                <NavItem eventKey={3}>
                  <Link to="/creator">Creator</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/creator" component={Creator} />
        </div>
      </Router>
    );
  }
}