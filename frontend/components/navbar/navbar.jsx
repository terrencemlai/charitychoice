import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';


class NavBar extends React.Component {

    render() {
        return (
        <div className="navbar-main">
            <div className="navbar-container">
                <span className="subleft">
                    <Link to="/"><div id="navbar-logo"></div></Link>
                    <Link className="navbar-button" to='/'>Find a classroom to support</Link>
                    <Link className="link" to='/'>About Us</Link>
                    <Link className="link" to='/'>Help</Link>
                </span>
                <span className="subright">
                    <GreetingContainer />
                </span>
            </div>
        </div>
        )
    }
}

export default NavBar;