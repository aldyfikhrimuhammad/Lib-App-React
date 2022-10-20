import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Sidebar from "../Sidebar";
import Searchbar from "../Searchbar";
import "../../styles/Components/Navbar/Navbar.css";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="bg-white shadow-lg navbar-section">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto p-1 d-flex justify-content-center align-items-center w-100">
              <Container>
                <Row>
                  <Col sm className="p-1 d-flex justify-start align-items-center left-content">
                    <div className="d-flex align-items-center">
                      <Sidebar />
                      <NavDropdown title="All Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Menu 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Menu 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Menu 3</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="All Times" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Menu 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Menu 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Menu 3</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </Col>
                  <Col sm className="p-1 d-flex justify-content-center align-items-center mid-content">
                    <div>
                      <Searchbar />
                    </div>
                  </Col>
                  <Col sm className="p-1 d-flex justify-content-end align-items-center right-content">
                    <div>
                      <Icon icon="fluent:library-20-regular" width="35" height="35" />
                      <Navbar.Brand href="/">Library</Navbar.Brand>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
