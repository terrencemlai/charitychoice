import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <div className="greetingMain">
            <div className="greetingLink" onClick={()=>openModal('signin')}>Sign in</div>
        </div>
    );

    const teacherGreeting = () => (
        <div className="greetingMain">
            <h2>{currentUser.display_name}</h2>
            <div>(teacher dropdown menu)</div>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    const userGreeting = () => (
        <div className="greetingMain">
            <h2>{currentUser.display_name}</h2>
            <div>(donor dropdown menu)</div>
            <button onClick={logout}>Log Out</button>
        </div>
    );
    
    if (!currentUser) {
        return sessionLinks();
    } else if (currentUser.is_teacher) {
        return teacherGreeting();
    } else {
        return userGreeting();
    }

};


export default Greeting;
