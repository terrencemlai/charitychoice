import React from 'react';
import { Link } from 'react-router-dom';


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
        // this.dropdownHideState = this.dropdownHideState.bind(this);
    }

    dropdownShow() {
        this.setState({ dropdown: ''})
        document.addEventListener('mousedown', this.dropdownHide)
    }

    dropdownHide(e) {
        if (e.target.className !== 'dropdown-option') {
            this.setState({ dropdown: ' account-dropdown-hidden'})
        }
        document.removeEventListener('mousedown', this.dropdownHide)
    }

    // dropdownHideState(){
    //     this.setState({ dropdown: ' account-dropdown-hidden'})
    //     document.removeEventListener('mousedown', this.dropdownHide)
    // }

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
                <span className="account-photo"></span>
                <span className="account-name">{this.props.currentUser.display_name}</span>
                <span class="material-icons account-expand">expand_more</span>
            </span>
            <div className={`account-dropdown${this.state.dropdown}`}>
                <ul className="account-links">
                    <li className="dropdown-option">
                        <span class="material-icons">person_outline</span>
                        My Profile
                    </li>
                    <li className="dropdown-option">
                        <span class="material-icons">view_list</span>
                        My Projects
                    </li>
                    <li className="dropdown-option">
                        <span class="material-icons">favorite_border</span>
                        Favorites
                    </li>
                    <li className="dropdown-option" onClick={ () => this.props.logout()}>
                        <span class="material-icons">close</span>
                        Sign Out
                    </li>
                </ul>
                <span className="dropdownBackground" onClick={this.dropdownHide}></span>
            </div>
        </span>

    )}
    
    userGreeting () {
        return (
        <span className="account-main">
            <span className="greeting" onClick={this.dropdownShow}>
                <span className="account-photo"></span>
                <span className="account-name">{this.props.currentUser.display_name}</span>
                <span className="account-arrow">V</span>
            </span>
            <span className={`account-dropdown${this.state.dropdown}`}>
                <ul className="account-links">
                    <li className="dropdown-option">My Profile</li>
                    <li className="dropdown-option">Favorites</li>
                    <li className="dropdown-option" onClick={ () => this.props.logout()}>Sign Out</li>
                </ul>
                <span className="dropdownBackground" onClick={this.dropdownHide}></span>
            </span>
        </span>
    )}
    
    render () {
        if (!this.props.currentUser) {
            return this.sessionLinks();
        } else if (this.props.currentUser.is_teacher) {
            return this.teacherGreeting();
        } else {
            return this.userGreeting();
        }        
    }

}



export default Greeting;