import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "../Sidebar";
import Searchbar from "../Searchbar";
import "../../styles/Components/Navbar/Navbar.css";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="bg-white shadow-lg navbar-section border">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto p-1 d-flex justify-content-center align-items-center w-100">
              <Container fluid>
                <Row>
                  <Col sm className="p-1 d-flex justify-start align-items-center left-content">
                    <div className="d-flex align-items-center">
                      <Sidebar />
                      <NavDropdown title="All Categories" id="basic-nav-dropdown" className="Navbar-Menu">
                        <NavDropdown.Item href="#action/3.1" className="Dropdown-Menu">Menu 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" className="Dropdown-Menu">Menu 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" className="Dropdown-Menu">Menu 3</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="All Times" id="basic-nav-dropdown" className="Navbar-Menu">
                        <NavDropdown.Item href="#action/3.1" className="Dropdown-Menu">Menu 4</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" className="Dropdown-Menu">Menu 5</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" className="Dropdown-Menu">Menu 6</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </Col>
                  <Col sm className="p-1 d-flex justify-content-center align-items-center mid-content">
                    <div>
                      <Searchbar />
                    </div>
                  </Col>
                  <Col sm className="p-1 d-flex justify-content-end align-items-center right-content">
                    <div className="d-flex justify-content-center align-items-center Navbar-Menu">
                      <Icon icon="fluent:library-20-regular" width="35" height="35" className="me-1" />
                      <Link to={"/"}>
                        <Navbar.Brand href="/">Library</Navbar.Brand>
                      </Link>
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
