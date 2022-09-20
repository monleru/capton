import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ContentLoader from 'react-content-loader'

const MyLoader = () => (
    <ContentLoader viewBox="0 0 100000 100000"
                   preserveAspectRatio="none"
                   width='100%'
                   height='50px'
                   backgroundColor="#3a3a3a"
                   foregroundColor="#555151"
                   speed={4}>
        <rect x="80" y="40" rx="3" ry="3" width="100%" height="100%" />
    </ContentLoader>
)

interface cardInfo{
    props: {
        name: string,
        reward: string,
        activites: string[],
        rating: number,
        contract: string,
        _id: string,
        img: string
    },
    loader: boolean
}
const Cards:React.FC<cardInfo> = (
    {props, loader}) => {
    if (typeof props === "number" ) {
        return(
            <div>
                <MyLoader />
            </div>
        )
    }
    return (
        <div>
            <div className="collections_sort_div">
                <Link className="just_start" to={`/events/${props.name.replace(/ /ig, '_')}/${props._id}`} style={{"textAlign": "start"}}><
                    img className="card_name_img" src={props.img}/>
                    {props.name}
                </Link>
                <p style={{'color': 'rgba(0, 136, 204, 1)'}}>{props.reward}</p>
                <p className="activites_type_flex">{props.activites.map(post =>
                    <p className="activites_type">{post}</p>
                )}</p>
                <p style={ props.rating >= 7.5 ? {'backgroundImage': 'linear-gradient(to bottom, rgba(25, 149, 218, 1), rgba(222, 168, 255, 1))'} :
                           props.rating >= 4 ? {'backgroundImage': 'linear-gradient(to bottom, rgba(52, 218, 25, 1), rgba(92, 255, 216, 1))'} :
                           props.rating <4 ? {'backgroundImage': 'linear-gradient(to bottom, rgba(218, 25, 25, 1), rgba(255, 239, 92, 1))'} : { 'backgroundImage': ''}}
                   className="rating_event"
                >
                    {props.rating}
                </p>
            </div>
        </div>
    );
};

export default Cards;