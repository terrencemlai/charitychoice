import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: ' account-dropdown-hidden'
        }
        
        this.sessionLinks = this.sessionLinks.bind(this);
        this.teacherGreeting = this.teacherGreeting.bind(this);
        this.userGreeting = this.userGreeting.bind(this);
        this.dropdownShow = this.dropdownShow.bind(this);
        this.dropdownHide = this.dropdownHide.bind(this);
    }

    dropdownShow() {
        this.setState({ dropdown: ''})
        document.getElementById('root').addEventListener('mousedown', this.dropdownHide)
    }

    dropdownHide(e) {
        if (e.target.className !== 'dropdown-option') {
            this.setState({ dropdown: ' account-dropdown-hidden'})
            document.getElementById('root').removeEventListener('mousedown', this.dropdownHide)
        }
    }

    componentDidMount(){
        this.setState({ dropdown: ' account-dropdown-hidden' })
    }

    sessionLinks () {
        return (
        <span className="greeting">
            <span className="link" onClick={ () => this.props.openModal('signin') }>Sign in</span>
        </span>
    )}

    teacherGreeting () {
        return (
        <span className="account-main">
            <span className="greeting" onClick={this.dropdownShow}>
                <span className="account-photo-teacher"></span>
                <span className="account-name">{this.props.currentUser.display_name}</span>
                <span className="material-icons account-expand">expand_more</span>
            </span>
            <div className={`account-dropdown${this.state.dropdown}`}>
                <ul className="account-links">
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
                    {/* <li className="dropdown-option">
                        <span className="material-icons">favorite_border</span>
                        Favorites
                    </li>
                    <li className="dropdown-option">
                        <span className="material-icons">person_outline</span>
                        My Profile
                    </li> */}
                    <li className="dropdown-option" onClick={ () => this.props.logout()}>
                        <span className="material-icons">close</span>
                        Sign Out
                    </li>
                </ul>
            </div>
        </span>

    )}
    
    userGreeting () {
        return (
        <span className="account-main">
            <span className="greeting" onClick={this.dropdownShow}>
                <span className="account-photo-user"></span>
                <span className="account-name">{this.props.currentUser.display_name}</span>
                <span className="material-icons account-expand">expand_more</span>
            </span>
            <div className={`account-dropdown${this.state.dropdown}`}>
                <ul className="account-links">
                    {/* <li className="dropdown-option">
                        <span className="material-icons">person_outline</span>
                        My Profile
                    </li>
                    <li className="dropdown-option">
                        <span className="material-icons">favorite_border</span>
                        Favorites
                    </li> */}
                    <li className="dropdown-option" onClick={ () => this.props.logout()}>
                        <span className="material-icons">close</span>
                        Sign Out
                    </li>
                </ul>
            </div>
        </span>
    )}
    
    handleSearchNavClick() {
        this.props.fetchProjects({ with_search: false, page: 1 });
    }

    render () {
        const greeting = () => {
            if (!this.props.currentUser) {
                return this.sessionLinks();
            } else if (this.props.currentUser.is_teacher) {
                return this.teacherGreeting();
            } else {
                return this.userGreeting();
            }        
        }

        return (
            <div className="navbar-main">
            <div className="container">
                <span className="subleft">
                    <Link to="/"><div id="navbar-logo"></div></Link>
                    <Link to="/projects/search" className="navbar-button" onClick={()=>this.handleSearchNavClick()}>Find a classroom to support</Link>
                    <a className="link" href="https://www.linkedin.com/in/terrencelai/" target="_blank"><div className="link-holder">LinkedIn</div></a>
                    <a className="link" href="https://github.com/terrencemlai/charitychoice" target="_blank"><div className="link-holder">GitHub</div></a>
                </span>
                <span className="subright">
                    {greeting()} 
                </span>
            </div>
        </div>
        )

    }

}



export default Greeting;
