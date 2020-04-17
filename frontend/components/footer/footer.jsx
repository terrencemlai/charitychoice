import React from 'react';

class Footer extends React.Component {

    render () {
        return (
            <div className="footer-main"> 
                <div className="footer-container">
                    <div className="col col-1-4">
                        <label>DonorsChoose.org</label>
                        <p>Teachers and students need your help to transform their classrooms and maximize their educational enrichment. Fund supplies, equipment, class trips, and more for a real classroom project of your choice today at DonorsChoose.org.</p>
                    </div>

                    <div className="col col-4-4">
                        <label>Connect</label>
                        <ul>
                            <li><a className="link" href="https://www.linkedin.com/in/terrencelai/" target="_blank">LinkedIn</a></li>
                            <li><a className="link" href="https://github.com/terrencemlai/charitychoice" target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;