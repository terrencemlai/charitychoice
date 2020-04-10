import React from 'react';

class Splash extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="splashMain">
                <div className="splashContainer splash01">
                    WELCOME MESSAGE
                </div>
                <div className="splashContainer splash02">
                    SEARCH BAR
                </div>
                <div className="splashContainer splash03">
                    TEACHER GREETING
                </div>
                <div className="splashContainer splash04">
                    NEARBY PROJECTS
                </div>
                <div className="splashContainer splash05">
                    ABOUT US
                </div>
                <div className="splashContainer splash06">
                    MORE INFO
                </div>
                <div className="splashContainer splash07">
                    YET MORE INFO
                </div>
                <div className="splashContainer splash08">
                    EVEN MORE INFO
                </div>
            </div>
        )
    }
}

export default Splash;