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
            <div className="greetingPhoto"></div>
            <div>{currentUser.display_name}</div>
            <div onClick={() => logout()} className="greetingArrow">V</div>
        </div>
    );

    const userGreeting = () => (
        <div className="greetingMain">
            <div className="greetingPhoto"></div>
            <div>{currentUser.display_name}</div>
            <div onClick={()=> logout()} className="greetingArrow">V</div>
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
