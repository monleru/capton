import React from 'react';
import './style.css'
import MeetupCards from "./meetupCards";
const twitter = require('../img/twitter.png')
const telegram = require('../img/telegram.png')
const github = require('../img/github.png')
const crystall = require('./img/crystall.png')
const appstore = require('./img/appstore.png')
const googleplay = require('./img/googleplay.png')
const explore = require('./img/explore.png')
const join = require('./img/join.png')
const get_inov = require('./img/get_inov.png')
const hyperLabs = require('./img/logo.png')
const HoneFi_logo = require('./img/Honefi_logo.png')
const tonLogo = require('../img/ton_logo.png')
const img_1 = require('./img/div_1.png')
const img_3 = require('./img/div_3.png')

const Index:React.FC = () => {
    return (
        <div>
            <div className="ladning_header_div">
                <div className="landing_head">
                    <h1><span className="landeing_h1_blue">Capton - </span><br/>
                        multiplatform for the<br/>
                        Ton ecosystem</h1>
                    <p>
                        <a href=""><img src={telegram}/></a>
                        <a href=""><img src={twitter}/></a>
                        <a href=""><img src={github}/></a>
                    </p>
                </div>
            </div>
            <div>
                <div className="div_1">
                    <img src={img_1} alt=""/>
                    <div>
                        <h2><span>Capton.</span>Stats</h2>
                        <p>Statistics of NFT's and tokens on the TON blockchain.</p>
                        <a className="div_link_button" href="">
                            <img src={explore} alt=""/>
                            Explore
                        </a>
                    </div>
                </div>
                <div className="div_2">
                    <img src={img_3} alt=""/>
                    <div>
                        <h2><span>Capton.</span>Drops</h2>
                        <p>All current activities of the TON ecosystem.</p>
                        <a className="div_link_button" href="">
                            <img src={join} alt=""/>
                            Join
                        </a>
                    </div>
                </div>
                <div className="div_3">
                    <img src={img_3} alt=""/>
                    <div>
                        <h2><span>Gram.</span>Talks</h2>
                        <p>TON events, meetups, and an active community.</p>
                        <a className="div_link_button" href="">
                            <img src={get_inov} alt=""/>
                            Get Involved</a>
                    </div>
                </div>
            </div>
            <div className="our_partners">
                <h2>Our Partners</h2>
                <div className="our_partners_flex">
                    <a href=""><img src={hyperLabs} alt=""/></a>
                    <a href=""><img src={tonLogo} alt=""/></a>
                    <a href=""><img src={HoneFi_logo} alt=""/></a>
                    <a href=""><img src={hyperLabs} alt=""/></a>

                </div>
            </div>
            <div className="latest_post">
                <h2>Latest Posts</h2>
                <p>from our blog about TON blockchain</p>
                <div className="carousel">
                    <MeetupCards />
                </div>
            </div>
        </div>
    );
};

export default Index;