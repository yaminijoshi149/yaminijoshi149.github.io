import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="nav-body">
      <Container fluid> 
        <Button className="resume-button" style={{ backgroundColor:"transparent", border: "2px solid #F7E7DC", color:"#5B9A8B", marginLeft:"1%"}}>
          <Nav.Link className='nav-button' href="https://drive.google.com/file/d/1MD9z0nhj6UgUzhQrCznKcJVM2jHzEt2P/view?usp=sharing" download="SwathiA_Resume.pdf">
              CV <i className="fas fa-download"></i> 
          </Nav.Link>
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={{padding:"1% 5%"}}>
            <Nav.Link as={ScrollLink} className="nav-link" to="home" smooth={true} duration={500}>Home</Nav.Link>
            <Nav.Link as={ScrollLink} className="nav-link" to="skills" smooth={true} duration={500}>Skills</Nav.Link>
            <Nav.Link as={ScrollLink} className="nav-link" to="experiences" smooth={true} duration={500}>Experiences</Nav.Link>
            <Nav.Link as={ScrollLink} className="nav-link" to="projects" smooth={true} duration={500}>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;