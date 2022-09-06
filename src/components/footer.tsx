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
                <p><a href="">Calendar</a></p>
                <p><a href="">Drops</a></p>
                <p><a href="">Alerts</a></p>
            </div>
            <div>
                <h3>Resources</h3>
                <p><a href="">Request Form</a></p>
                <p><a href="">Market API</a></p>
                <p><a href="">API Docs</a></p>
                <p><a href="">Blog</a></p>
            </div>
            <div>
                <h3>Company</h3>
                <p><a href="">About us</a></p>
                <p><a href="">Contact</a></p>
                <p><a href="">Terms</a></p>
                <p><a href="">Privacy</a></p>
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