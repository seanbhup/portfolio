import React, { Component } from 'react';
import '../App.css';



class Skills extends Component{
    render(){
        return(
            <div id="skills-wrapper">
                <h1 id="skills-header">Skills</h1>
                <div id="skills-body">
                    <div id="known-skills">What I know
                        <div><img className="icon" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/></div>
                        <div><img className="icon" src="https://ohdoylerules.com/content/images/css3.svg"/></div>
                        <div><img className="icon" src="http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg"/></div>
                        <div><img className="icon" src="http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif"/></div>
                        <div><img className="icon" src="https://facebook.github.io/react/img/logo.svg"/></div>
                        <div><img className="icon" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/></div>
                        <div><img className="icon" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/></div>
                        <div><img className="icon" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/></div>
                        <div><img className="icon" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/></div>
                    </div>
                    <div id="upcoming-skills">What I am learning
                        <div><img className="icon" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/></div>
                        <div><img className="icon" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Skills;
