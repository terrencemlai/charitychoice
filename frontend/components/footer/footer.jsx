import React from 'react';

class Footer extends React.Component {

    render () {
        return (
            <div className="footer-main"> 
                <div className="footer-container">
                    <div className="col col-1-4">
                        <p>Footer Subheader</p>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </div>
                    <div className="col col-2-4">
                        <p>About Us</p>
                        <li>Our Story</li>
                        <li>Founders</li>
                        <li>Donors</li>
                        <li>Careers</li>
                        <li>Board</li>
                    </div>
                    <div className="col col-3-4">
                        <p>Privacy</p>
                        <li>Security</li>
                        <li>Safety</li>
                        <li>GDPR</li>
                        <li>CCPA</li>
                        <li>Legal</li>
                    </div>
                    <div className="col col-4-4">
                        <p>Contact Us</p>
                        <li>Offices</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Events</li>
                        <li>Network</li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;