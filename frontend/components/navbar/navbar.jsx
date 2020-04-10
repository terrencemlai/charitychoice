import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import { logout } from '../../actions/session_actions';

class NavBar extends React.Component {

    render() {
        return (

        <div className="navBarContainer">
            <div className="navBarLeft">
                <Link id="navBarLogo" to="/">LOGO HERE</Link>
                <Link className="navBarButton" to='/'>Find a classroom to support</Link>
                <Link className="navBarLink" to='/'>About Us</Link>
                <Link className="navBarLink" to='/'>Help</Link>
            </div>
            <div className="navBarRight">
                <GreetingContainer />
            </div>
        </div>
        )
    }
}

export default NavBar;