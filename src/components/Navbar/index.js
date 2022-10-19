import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sidebar from '../Sidebar'
import Searchbar from '../Searchbar';

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Sidebar/>
            <NavDropdown title="All Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Menu 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Menu 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Menu 3
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="All Times" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Menu 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Menu 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Menu 3
              </NavDropdown.Item>
            </NavDropdown>
            <Searchbar/>
            <Icon icon="fluent:library-20-regular" width="35" height="35" />
            <Navbar.Brand href="/">Library</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <p><Link to="/">Home</Link></p>
      <p><Link to="/profile">Profile</Link></p>
    </div>
  )
}

export default NavbarComp