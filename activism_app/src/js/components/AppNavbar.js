import React from "react";
import { Link } from "react-router"
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"

const AppNavbar = () => (
  <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Apella</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/my-proposals"><NavItem eventKey={1}>My Proposals</NavItem></LinkContainer>
          <LinkContainer to="/faq"><NavItem eventKey={2} href="faq">FAQ</NavItem></LinkContainer>
          <LinkContainer to="/donate"><NavItem eventKey={3} href="donate">Donate</NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={4} title="User" id="basic-nav-dropdown">
            <MenuItem eventKey={4.1}>Action</MenuItem>
            <MenuItem eventKey={4.2}>Another action</MenuItem>
            <MenuItem eventKey={4.3}>Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey={4.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);


export default AppNavbar
