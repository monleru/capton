import React from 'react';
const logo = require( '../img/logo.png')
const twitter = require('../img/twitter.png')
const telegram = require('../img/telegram.png')
const github = require('../img/github.png')

const Footer:React.FC = () => {
    return (
        <div className="Footer">
            <div>
                <h3 style={{'display': 'flex', 'alignItems': 'center'}}>
                    <img src={logo} alt=""/>
                    Capton
                </h3>
            </div>
            <div>
                <h3>Products</h3>
                <p>Calendar</p>
                <p>Drops</p>
                <p>Alerts</p>
            </div>
            <div>
                <h3>Resources</h3>
                <p>Request Form</p>
                <p>Market API</p>
                <p>API Docs</p>
                <p>Blog</p>
            </div>
            <div>
                <h3>Company</h3>
                <p>About us</p>
                <p>Contact</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div>
                <h3>Subscribe to our Newsletter</h3>
                <p>to always get up to date information</p>
                <button className="subscribe_button">Subscribe</button>
                <p style={{'textAlign': 'center'}}>
                    <a href=""><img src={telegram}/></a>
                    <a href=""><img src={twitter}/></a>
                    <a href=""><img src={github}/></a>
                </p>
            </div>
            <p className="All_right_reserved">© 2022 Capton. All rights reserved.</p>
        </div>
    );
};

export default Footer;