import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class GreetingMobile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accountDropdown: '',
            mobileDropdown: ' mobile-menu-dropdown-hidden',
        }

        this.sessionMenu = this.sessionMenu.bind(this);
        this.teacherMenu = this.teacherMenu.bind(this);
        this.userMenu = this.userMenu.bind(this);
        this.toggleAccountLinks = this.toggleAccountLinks.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleAccountLinks () {
        this.state.accountDropdown === '' ? this.setState({ accountDropdown: ' account-dropdown-hidden' }) : this.setState({ accountDropdown: '' });
    }

    toggleMenu () {
        this.state.mobileDropdown === '' ? this.setState({ mobileDropdown: ' mobile-menu-dropdown-hidden' }) : this.setState({ mobileDropdown: '' });
    }

    sessionMenu () {
        return (
        <div id="mobile-signin" onClick={ () => this.props.openModal('signin') }>
            Sign in
        </div>
    )}

    teacherMenu () {
        return (
            <div>
                <div className="greeting" onClick={ () => this.toggleAccountLinks() }>
                    <span className="account-photo-teacher"></span>
                    <span className="account-name">{this.props.currentUser.display_name}</span>
                </div>
                <ul className={`account-links${this.state.accountDropdown}`}>
                    <div className="link-holder">
                        <Link className="link" to="/projects/create">
                            <li className="dropdown-option">
                                    <span className="material-icons">add_circle_outline</span>
                                    New Project
                            </li>
                        </Link>
                    </div>
                    <div className="link-holder">
                        <Link className="link" to="/teachers/myprojects">
                            <li className="dropdown-option">
                                <span className="material-icons">view_list</span>
                                My Projects
                            </li>
                        </Link>
                    </div>
                    <li className="dropdown-option">
                        <span className="material-icons">favorite_border</span>
                        Favorites
                    </li>
                    <li className="dropdown-option">
                        <span className="material-icons">person_outline</span>
                        My Profile
                    </li>
                    <li className="dropdown-option" onClick={ () => this.props.logout()}>
                        <span className="material-icons">close</span>
                        Sign Out
                    </li>
                </ul>
            </div>
        )
    }
    
    userMenu () {
        return (
            <div>
                <div className="greeting" onClick={ () => this.toggleAccountLinks() }>
                    <span className="account-photo-user"></span>
                    <span className="account-name">{this.props.currentUser.display_name}</span>
                </div>
                <ul className={`account-links${this.state.accountDropdown}`}>
                        <li>
                            <span className="material-icons">person_outline</span>
                            My Profile
                        </li>
                        <li>
                            <span className="material-icons">favorite_border</span>
                            Favorites
                        </li>
                        <li onClick={ () => this.props.logout()}>
                            <span className="material-icons">close</span>
                            Sign Out
                        </li>
                    </ul>
            </div>
        )

    }
    
    render () {

        const accountLinks = () => {
            if (!this.props.currentUser) {
                return this.sessionMenu();
            } else if (this.props.currentUser.is_teacher) {
                return this.teacherMenu();
            } else {
                return this.userMenu();
            }        
        }

        return (
            <div className="navbar-mobile">
                <div className="container">
                    <Link to="/"><div id="navbar-logo"></div></Link>
                    <span id="mobile-menu-button" onClick={()=>this.toggleMenu()}>
                                Menu
                    </span>
                </div>
                <ul className={`mobile-menu-dropdown${this.state.mobileDropdown}`}>
                    <Link className="link" to='/projects/search'>
                        <li>Find a classroom to support</li>
                    </Link>
                    <li>
                        <a className="link" href="https://www.linkedin.com/in/terrencelai/" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a className="link" href="https://github.com/terrencemlai/charitychoice" target="_blank">GitHub</a>
                    </li>
                    <div>
                        { accountLinks() }
                    </div>
                </ul>
            </div>
        )
    }
}


export default withRouter(GreetingMobile);
