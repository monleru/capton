import React, {useEffect, useState} from 'react';
import './slider.css'
const arrow = require('./img/arrow.png')
const meetup_1 = require('./img/ton_meetup_1.jpg')


const MeetupCards:React.FC = () => {
    const [cards, setCards] = useState<number[]>([])
    const [slideT, setSliderT] = useState<number>(0)
    const cardWidth = 261 + 50;
    useEffect(()=>{
        setCards([1,2,3,4,5,6,7,8,9,10,11,12,13])
    },[])
    const Left_arrow_click = () => {
        let a = Math.min(slideT + cardWidth,0)
        setSliderT(a)
    }
    const Right_arrow_click =  () => {
        let a = slideT - cardWidth
        return Math.max(a,-((cards.length-3) * cardWidth));
    }
    console.log(slideT)
    return (
        <div className="main_container_slider">
            <button className="left_arrow_landing" onClick={Left_arrow_click}>
                <img src={arrow} alt=""/>
            </button>
            <div className="window_slider">
                <div className="all_pages_slider"
                    style={{
                        transform: `translate(${slideT}px)`
                    }}
                >
                    {cards.map(post =>
                        <div className="meetup_card_div">
                            key={Math.random()} 
                            <img className="meetup_card_img" src={meetup_1} alt=""/>
                            <h3>Ton Meetup #23</h3>
                            <p>The title of the post here will be, at most, 2 lines</p>
                            <p>30 August <a className="langing_card_news_button" href="">News</a></p>
                        </div>
                    )}
                </div>
            </div>
            <button className="right_arrow_landing" onClick={() => setSliderT(Right_arrow_click)}>
                <img src={arrow} alt=""/>
            </button>
        </div>
    );
};

export default MeetupCards;