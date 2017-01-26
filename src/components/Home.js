import React, { Component } from 'react';
import '../App.css';


class Home extends Component{

    render(){
        return(
            <div id="home-screen">
                <div id="home-name">Sean Bhupathi</div>
                <div id="home-description">Is he a Human<span id="question-mark">?</span></div>
                <div><button className="press-start" onclick="">Press Start</button></div>

                {/* }<img id="down-arrow" src="http://image.flaticon.com/icons/svg/24/24567.svg"></img> */}


            </div>

        )
    }
}

export default Home;
