import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import GreetingMobileContainer from '../greeting/greeting_mobile_container';


class NavBar extends React.Component {

    render() {
        return (
            <div>
                <GreetingContainer />
                <GreetingMobileContainer />
            </div>
        )
    }
}

export default NavBar;