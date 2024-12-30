import React, { useState} from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
	const [expanded, setExpanded] = useState(false);

  	const handleLinkClick = () => {
    	setExpanded(false); // Close the menu
  };
  	return (
		<Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
			<Container>
				<Navbar.Brand as={Link} to="/">Trym H. Nyheim</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/" onClick={handleLinkClick}>Home</Nav.Link>
						<Nav.Link as={Link} to="/tasks" onClick={handleLinkClick}>Tasks</Nav.Link>
						<Nav.Link as={Link} to="/games" onClick={handleLinkClick}>Games</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1" onClick={handleLinkClick}>Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.1" onClick={handleLinkClick}>Action</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4" onClick={handleLinkClick}>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
  	)
}

export default NavigationBar;
