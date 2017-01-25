import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class Nav1 extends Component{
    render(){
        return(
            <Navbar col-sm-12 id="navbar">
                <Navbar.Header id="nav-header">
                    <Navbar.Brand id="nav-brand">
                        <a id="home" href="#">Home</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav id="nav">
                    <NavItem id="navitem" eventKey={1} href="#">Link</NavItem>
                    <NavItem id="navitem" eventKey={2} href="#">Link</NavItem>
                    <NavItem id="navitem" eventKey={2} href="#">Link</NavItem>
                    <NavItem id="navitem" eventKey={2} href="#">Link</NavItem>
                    <div id="logo"><img src="http://placehold.it/200x100"></img></div>
                    {/* }<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown> */}
                </Nav>
            </Navbar>
        )
    }
}

export default Nav1;
