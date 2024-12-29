import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function NavigationBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand as={Link} to="/home">Trym H. Nyheim</Navbar.Brand> {/* Use Link for Brand */}
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
                <Nav.Link as={Link} to="/games">Games</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;
