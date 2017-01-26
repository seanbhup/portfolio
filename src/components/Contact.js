import React, { Component } from 'react';
import '../App.css';



class Contact extends Component{
    render(){
        return(
            <div id="contact-wrapper">
                <div id="contact-body">
                    <div id="contact-logo">Github<a href="https://github.com/seanbhup"><img className="github-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2000px-Octicons-mark-github.svg.png"/></a></div>
                    <div id="contact-logo">LinkedIn<a href="https://www.linkedin.com/in/seanbhupathi"><img className="linkedin-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"/></a></div>
                    <div id="contact-logo">Resume<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img className="resume-logo" src="https://www.base64-image.de/build/img/mr-base64-482fa1f767.png"/></a></div>
                </div>
            </div>

        )
    }
}

export default Contact;
