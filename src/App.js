import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav1 from './components/Nav.js';


class App extends Component {


    render() {
        return (
            <div className="app">
                <Nav1 />
                {this.props.children}
            </div>
            
        );
    }
}

export default App;
