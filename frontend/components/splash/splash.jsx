import React from 'react';

class Splash extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="splash-main">
                <div className="splash-row-01">
                    <span className="splash-row-01-A">
                        <span className="splash-row-01-B">WELCOME MESSAGE</span>
                    </span>
                </div>
                <div className="splash-row-01-c">WELCOME MESSAGE</div>

                <div className="splash-row splash02">
                    SEARCH BAR
                </div>
                <div className="splash-row splash03">
                    TEACHER GREETING
                </div>
                <div className="splash-row splash04">
                    NEARBY PROJECTS
                </div>
                <div className="splash-row splash05">
                    ABOUT US
                </div>
                <div className="splash-row splash06">
                    MORE INFO
                </div>
                <div className="splash-row splash07">
                    YET MORE INFO
                </div>
                <div className="splash-row splash08">
                    EVEN MORE INFO
                </div>
            </div>
        )
    }
}

export default Splash;