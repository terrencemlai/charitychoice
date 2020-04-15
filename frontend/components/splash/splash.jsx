import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props){
        super(props);
    }

    renderWelcome(){
        return (
            <div id="welcome-message">
                <h1>Make a difference.</h1>
                <h1>Give back.</h1>
                <p className="subheader">
                    Teachers and students need your help to transform their classrooms and maximize their educational enrichment. 
                    Fund supplies, equipment, class trips, and more for a classroom project of your choice today.
                </p>
                <Link className="link" to="/"><div>See classroom projects</div></Link>
                <p className="subblurb">
                    Thank you for considering this demonstration site, inspired by DonorsChoose.org
                </p>
            </div>
        )

    }

    render(){
        return (
            <div className="splash-main">
                <div className="splash-row splash-row-01">
                    <span className="splash-row-01-A">
                        <span className="splash-row-01-B">{this.renderWelcome()}</span>
                    </span>
                    <span className="splash-row-01-C">{this.renderWelcome()}</span>
                </div>

                <div className="splash-row splash-row-02">
                    SEARCH BAR
                </div>
                <div className="splash-row splash-row-03">
                        <span>Are you a school teacher?</span>
                        <Link className="link" to="/teachers/signup"><div>Register to create projects</div></Link>
                </div>
                <div className="splash-row splash-row-04">
                    NEARBY PROJECTS
                </div>
                <div className="splash-row splash-row-05">
                    <h2>
                        About Us
                    </h2>
                    <p className="subheader">
                        Founded in 2020, CharityChoice was created by a data scientist studying software engineering at one of New York's most selective bootcamps. The objective upon graduation is to further develop creative and dynamic analytics solutions for real business challenges.
                    </p>
                    
                    <a className="link" href="https://www.linkedin.com/in/terrencelai/">LinkedIn</a>
                    
                </div>
                <div className="splash-row splash-row-06">
                    MORE INFO
                </div>
                <div className="splash-row splash-row-07">
                    YET MORE INFO
                </div>
                <div className="splash-row splash-row-08">
                    EVEN MORE INFO
                </div>
            </div>
        )
    }
}

export default Splash;