import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ContentLoader, {Facebook}  from "react-content-loader";

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
const MyLoader = () => (
    <ContentLoader
        speed={4}
        width={"100% "}
        height={"100%"}
        backgroundColor="rgba(75, 75, 75, 1)"
        foregroundColor="rgba(89, 84, 84, 1)">
        {/* Only SVG shapes */}
        <rect x="" y="0" rx="0" ry="4" width="100%" height="100%" />
    </ContentLoader>
)
const Cards:React.FC<cardInfo> = (
    {props, loader}) => {
    if (loader == true ) {
        return(
            <div>
                <div className="collections_sort_div">
                    <div className="loader_events_card">
                        <MyLoader />
                    </div>
                </div>
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