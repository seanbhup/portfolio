import React, { Component } from 'react';
import '../App.css';


class Projects extends Component{
    render(){
        return(
            <div id="projects-wrapper">
                <div id="projects-body">
                    <div className="project">
                            <div className="project-description" id="geoquiz-description">Description goes here</div>
                            <div><a href="http://ec2-35-165-8-205.us-west-2.compute.amazonaws.com/geography-game/#/play"><img className="project-image" id="geoquiz-image" src="https://i.imgur.com/LsfnFCc.jpg"/></a></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Projects;
