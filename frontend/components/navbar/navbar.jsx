import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link className="navBarLink" to='/teachers/new'>Sign Up</Link>
            </div>
        </div>
        )
    }
}

export default NavBar;