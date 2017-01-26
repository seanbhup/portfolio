import React, { Component } from 'react';
import '../App.css';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router';

class About extends Component{
    render(){
        return(
            <div id="about-wrapper">
                <div id="about-body">
                    <div id="profile">
                        <img id="sean-image" src="https://scontent-mia1-2.xx.fbcdn.net/v/t31.0-8/11312631_2911124341347_4187261689623082104_o.jpg?oh=1ac509e20758a12418585297d1c0b997&oe=59195DE4"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
