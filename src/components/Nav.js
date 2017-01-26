import React, { Component } from 'react';
import '../App.css';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {Link, IndexLink} from 'react-router';

class Nav1 extends Component{
    render(){
        return(
            <Navbar id="navbar">
                <Navbar.Header id="nav-header">
                    <Navbar.Brand id="nav-brand">
                        <a id="home"><IndexLink to="/">Hello</IndexLink></a>
                    </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav id="nav">
                        <NavItem id="navitem"><Link to="about" activeClassName="active">About</Link></NavItem>
                        <NavItem id="navitem"><Link to="projects" activeClassName="active">Projects</Link></NavItem>
                        <NavItem id="navitem"><Link to="skills" activeClassName="active">Skills</Link></NavItem>
                        <NavItem id="navitem"><Link to="contact" activeClassName="active">Contact</Link></NavItem>
                        {/* }<div id="logo"><img src="http://placehold.it/100x100"></img></div> */}
                  </Nav>

                </Navbar.Collapse>
              </Navbar>
        )
    }
}

export default Nav1;
