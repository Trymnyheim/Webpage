import { useState} from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher.jsx';

function NavigationBar() {
	const { t } = useTranslation("navigation");

	const [expanded, setExpanded] = useState(false);
	const [loginShow, setLoginShow] = useState(false);

	const handleLoginClose = () => setLoginShow(false);
  	const handleLoginShow = () => setLoginShow(true);
	const handleLoginClick = () => {handleLoginShow(); handleLinkClick()};

  	const handleLinkClick = () => {
    	setExpanded(false); // Close the menu
  };

  	return (
		<Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
			<Container>
				<Navbar.Brand as={Link} to="/">Trym H. Nyheim</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"
					onClick={() => setExpanded(expanded ? false : true)}
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/" onClick={handleLinkClick}>{t("home")}</Nav.Link>
						<Nav.Link as={Link} to="/fun" onClick={handleLinkClick}>{t("fun")}</Nav.Link>
						<NavDropdown title={t("aboutme.h")} id="basic-nav-dropdown">
							<NavDropdown.Item as={Link} to="/aboutme" onClick={handleLinkClick}>
								{t("aboutme.bio")}
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/aboutme/education" onClick={handleLinkClick}>
								{t("aboutme.education")}
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link onClick={handleLoginClick}>{t("login")}</Nav.Link>
					</Nav>
					<LanguageSwitcher />
				</Navbar.Collapse>
			</Container>
			<Login loginShow={loginShow} handleLoginClose={handleLoginClose} t={t} />
		</Navbar>
  	)
}

export default NavigationBar;
