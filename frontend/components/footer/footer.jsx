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
                    <div className="col col-2-4">
                        <label>About Us</label>
                        <ul>
                            <li>Our Story</li>
                            <li>Founders</li>
                            <li>Donors</li>
                            <li>Careers</li>
                            <li>Board</li>
                        </ul>
                    </div>
                    <div className="col col-3-4">
                        <label>Privacy</label>
                        <ul>
                            <li>Security</li>
                            <li>Safety</li>
                            <li>GDPR</li>
                            <li>CCPA</li>
                            <li>Legal</li>
                        </ul>
                    </div>
                    <div className="col col-4-4">
                        <label>Contact Us</label>
                        <ul>
                            <li>Offices</li>
                            <li>FAQs</li>
                            <li>Support</li>
                            <li>Events</li>
                            <li>Network</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;