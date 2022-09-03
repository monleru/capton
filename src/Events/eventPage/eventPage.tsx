import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {getDrop} from "../../api/fetch";
import './style.css'
const back = require('../../img/back_button.png');
const loader = require('../../img/loader.gif')
const telegram = require('../../img/telegram_info.png')
const twitter = require('../../img/twitter_info.png')
const discord = require('../../img/discord_info.png')
const website = require('../../img/website_info.png')


interface data {
    name: string,
    reward: string,
    activites: string[],
    rating: number,
    contract: string,
    logo: string,
    about: string,
    start: number,
    end: number,
    links: {
        telegram: string,
        discord: string,
        twitter: string,
        website: string,
    }
    eventLink: string,
    rewardsPool: string,
    participants: string,
    aboutDiv: string,
    img: string,
    details: string,
    _id: string,
}
const EventPage:React.FC = () => {
    const id = useParams().id
    const [img, setImg] = useState(loader)
    const [data, setData] = useState<data | null>(null)
    const changeData = async (data_:any) => {
        await setData(data_)
        setImg(data?.img)
    }
    useEffect(() =>{
        getDrop(id, changeData)
    },[])
    if (data == null){
        return (
            <div>

            </div>)
    }
    return (
        <div className="event_app">
            <div className="event_page_back_div">
                <p className="event_page_head">Activites - Events - {data?.name}</p>
                <Link className="back_button" to="/events">
                    <img src={back} alt=""/>
                    Back
                </Link>
            </div>
            <div className="Event_page_main_div">
                <div className="event_page_info_div">
                    <div className="event_page_logo_div">
                        <img src={data?.logo} alt=""/>
                        <p>{data?.name}</p>
                    </div>
                    <div>
                        <div>
                            <p>About</p>
                            <p className="event_page_info_div_p_">{data?.about}</p>
                        </div>
                        <div>
                            <p>Status</p>
                            <p style={{'display': 'flex', 'alignItems': 'center'}} className="event_page_info_div_p_">
                                <span className="event_active"></span> Active until 09.09.2022
                                {data?.start}</p>
                        </div>
                        <div>
                            <p>Distribution</p>
                            <p className="event_page_info_div_p_">
                                Expected on
                                {data?.end}</p>
                        </div>
                        <div>
                            <p>Activity Type</p>
                            <p style={{'display': 'flex', 'gridGap': '30px', 'flexWrap': 'wrap', 'margin': 0}}>{data?.activites.map(post =>
                                <p className="activites_type">{post}</p>
                            )}</p>
                        </div>
                        <div>
                            <p>Links</p>
                            <p style={{'display': 'flex', 'gridGap': '20px'}}>
                                <a href={data?.links.telegram}><img src={telegram} alt=""/></a>
                                <a href={data?.links.discord}><img src={discord} alt=""/></a>
                                <a href={data?.links.twitter}><img src={twitter} alt=""/></a>
                                <a href={data?.links.website}><img src={website} alt=""/></a>
                            </p>
                        </div>
                        <div>
                            <a className="event_page_info_event_link" href={data?.eventLink}>Event Page</a>
                        </div>
                    </div>
                </div>
                <div className="div_event_2">
                    <div className="event_page_header_div">
                        <div>
                            <h5
                                style={ data.rating >= 7.5 ? {'backgroundImage': 'linear-gradient(to bottom, rgba(25, 149, 218, 1), rgba(222, 168, 255, 1))'} :
                                    data.rating >= 4 ? {'backgroundImage': 'linear-gradient(to bottom, rgba(52, 218, 25, 1), rgba(92, 255, 216, 1))'} :
                                        data.rating <4 ? {'backgroundImage': 'linear-gradient(to bottom, rgba(218, 25, 25, 1), rgba(255, 239, 92, 1))'} : { 'backgroundImage': ''}}
                                className="rating_event"
                            >
                                {data?.rating}
                            </h5>
                            <p>Rating <span className="help">?</span></p>
                        </div>
                        <div>
                            <h5>{data?.reward}</h5>
                            <p>Rewards <span className="help">?</span></p>
                        </div>
                        <div>
                            <h5>{data?.rewardsPool}</h5>
                            <p>Rewards Pool <span className="help">?</span></p>
                        </div>
                        <div>
                            <h5 style={{'color': '#FFFFFF'}}>{data?.participants}</h5>
                            <p>Participants <span className="help">?</span></p>
                        </div>
                    </div>
                    <div className="event_page_main_div">
                        <div dangerouslySetInnerHTML={{__html: data?.aboutDiv}} className="event_page_main_about"></div>
                        <img className="event_page_img" src={img}/>
                        <div dangerouslySetInnerHTML={{__html: data?.details}} className="event_page_main_details"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;