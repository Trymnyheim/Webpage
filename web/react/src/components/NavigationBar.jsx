import React, { useState} from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';
import Register from './Register.jsx';

function NavigationBar() {
	const [expanded, setExpanded] = useState(false);
	const [loginShow, setLoginShow] = useState(false);
	const [registerShow, setRegisterShow] = useState(false);

	const handleLoginClose = () => setLoginShow(false);
  	const handleLoginShow = () => setLoginShow(true);
	const handleLoginClick = () => {handleLoginShow(); handleLinkClick()};

	const handleRegisterClose = () => setRegisterShow(false);
  	const handleRegisterShow = () => setRegisterShow(true);
	const handleRegisterClick = () => {handleRegisterShow(); handleLinkClick()};

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
						{false &&
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1" onClick={handleLinkClick}>Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.1" onClick={handleLinkClick}>Action</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4" onClick={handleLinkClick}>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>}
						<Nav.Link onClick={handleRegisterClick}>Register</Nav.Link>
						<Nav.Link onClick={handleLoginClick}>Login</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
			<Register registerShow={registerShow} handleRegisterClose={handleRegisterClose} />
			<Login loginShow={loginShow} handleLoginClose={handleLoginClose} />
		</Navbar>
  	)
}

export default NavigationBar;
