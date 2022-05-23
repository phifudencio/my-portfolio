import React from "react";
import linkedin from "../img/social/linkedin.png";
import instagram from "../img/social/instagram.png";
import twitter from "../img/social/twitter.png";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="xl" variant="light">
      <Container fluid style={{ marginRight: 100, marginLeft: 100 }}>
        <Navbar.Brand href="/">MHD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <NavDropdown title="Hobby" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hobby/jiujitsu">
                Jiujitsu
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/matheus-drumond-75112b1b8">
              <img alt="linkedin" src={linkedin} width="30" height="30"></img>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/matheus9d6/">
              <img alt="instagram" src={instagram} width="30" height="30"></img>
            </Nav.Link>
            <Nav.Link href="https://twitter.com/matthd96">
              <img alt="twitter" src={twitter} width="30" height="30"></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
