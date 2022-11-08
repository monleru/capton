import React, {useEffect, useState} from 'react';
import Cards from "./cards";
import {getDrops} from "../api/fetch";
interface cardInfo{
    name: string,
    reward: string,
    activites: string[],
    rating: number,
    contract: string,
    _id: string,
    img: string
}

const Collections:React.FC = () => {
    const [cards, setCards] = useState<any[]>([1,2,3,4,5,6,7,8,9,0])
    const [loader, setLoader] = useState(true)
    function changeCards(cards_:any){
        setCards(cards_)
        setLoader(false)
    }
    useEffect(() => {
        getDrops(changeCards)
    },[])
    const [page, setPage] = useState ({
        pages: [1],
        current: 1})
    function onchangePage(num:number) {
        let page_ = {
            pages: page.pages,
            current: num
        }
        setPage(page_)
    }
    return (
        <div className="event_page_collections">
            <div className="collections_sort_div">
                <p className="just_start">Name</p>
                <button>Reward <span className="help">?</span></button>
                <button>Activites</button>
                <button>Rating <span className="help">?</span></button>
            </div>
            <div>
                {cards.map(post =>
                    <Cards key={post._id} props={post} loader={loader}/>
                )}
            </div>
            <p className="collections_pages">
                {page.pages.map(post=>
                    <button
                        key={'Col' + Math.random()}
                        onClick={(e) => (onchangePage(post))}
                        className={"pages_buttons" + (post == page.current ? " pages_button_active" : '')}>
                        {post}
                    </button>
                )}
            </p>
        </div>
    );
};

export default Collections;