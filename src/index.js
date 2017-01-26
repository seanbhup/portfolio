// MODULES
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// COMPONENTS
import App from './App.js';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";

// CSS
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
      </Route>
  </Router>,
  document.getElementById('root')
);
